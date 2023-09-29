import React, { useState, useEffect } from "react";
import {
  ref,
  onValue,
  off,
  push,
  update,
  remove,
  set as dbSet,
} from "firebase/database";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { realTimeDb, storage } from "../firebase";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const productsRef = ref(realTimeDb, "products");
    const listener = onValue(productsRef, (snapshot) => {
      const productsData = snapshot.val();
      const productList = [];
      for (let id in productsData) {
        productList.push({ id, ...productsData[id] });
      }
      setProducts(productList);
    });
    return () => {
      off(productsRef, listener);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, description, image } = newProduct;

    try {
      let imageUrl = "";
      if (image) {
        const imageRef = sRef(storage, `images/${image.name}`);
        const uploadTaskSnapshot = await uploadBytesResumable(imageRef, image);
        imageUrl = await getDownloadURL(uploadTaskSnapshot.ref);
      }

      const productData = { name, price, description, imageUrl };
      const productsRef = ref(realTimeDb, "products");
      await dbSet(push(productsRef), productData);

      setNewProduct({ name: "", price: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const saveProduct = (productData) => {
    const productsRef = ref(realTimeDb, "products");
    if (editing) {
      if (currentProductId) {
        const productRef = ref(productsRef, currentProductId);
        update(productRef, productData).then(() => {
          setEditing(false);
          setCurrentProductId(null);
          setNewProduct({ name: "", price: "", description: "", image: null });
        });
      } else {
        console.error("No product ID found for updating");
      }
    } else {
      push(productsRef, productData).then(() => {
        setNewProduct({ name: "", price: "", description: "", image: null });
      });
    }
  };
  

  const handleDelete = (productId) => {
    const productRef = ref(realTimeDb, "products/" + productId);
    remove(productRef);
  };
  const handleEdit = (product) => {
    setEditing(true);
    setCurrentProductId(product.id);
    setNewProduct({
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <h2>
        Logout when you're done!
        <p>Edit function doesn't work right now, I'll have to fix it later.</p>
        <div>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">
          {editing ? "Save Changes" : "Add Product"}
        </button>
      </form>
      <br />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.name} />
            )}
            <br />
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default AdminDashboard;

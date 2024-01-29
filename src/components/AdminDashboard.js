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
      const productList = Object.keys(productsData).map(id => ({ id, ...productsData[id] }));
      setProducts(productList);
    });
    return () => off(productsRef, "value", listener);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewProduct(prevState => ({ ...prevState, image: e.target.files[0] }));
  };

  const uploadImage = async (image) => {
    const imageRef = sRef(storage, `images/${image.name}`);
    const uploadTaskSnapshot = await uploadBytesResumable(imageRef, image);
    return await getDownloadURL(uploadTaskSnapshot.ref);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, price, description, image } = newProduct;
    let imageUrl = image ? await uploadImage(image) : "";

    const productData = { name, price, description, imageUrl };
    const productsRef = ref(realTimeDb, "products");

    try {
      if (editing) {
        await update(ref(productsRef, currentProductId), productData);
      } else {
        await dbSet(push(productsRef), productData);
      }
      setNewProduct({ name: "", price: "", description: "", image: null });
      setEditing(false);
      setCurrentProductId(null);
    } catch (error) {
      console.error("Error handling product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditing(true);
    setCurrentProductId(product.id);
    setNewProduct({
      name: product.name,
      price: product.price,
      description: product.description,
      image: null, 
    });
  };

  const handleDelete = async (productId) => {
    try {
      await remove(ref(realTimeDb, "products/" + productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
      <h2>
        Logout when you're done!
        <div>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </h2>
      <form onSubmit={handleFormSubmit}>
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
    </div>
  );
};

export default AdminDashboard;

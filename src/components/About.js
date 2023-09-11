import React from "react";
import paperImg from "../img/paper.jpg";
import stuImg from "../img/Stu.jpg";

const About = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <br />
    <h1 className="highlighted-text" style={{ textAlign: "center", width: "70%" }}>About FRC</h1>
    <br />
    <p style={{ textAlign: "left", width: "70%" }}>
      Established and passionately managed by Stu Paul Dickinson, FRC stands as
      a beacon for hard-working individuals across Louisiana. Our specialty lies
      in providing high-quality used work clothes, ensuring that every
      blue-collar worker can afford the apparel they need without breaking the
      bank.
    </p>
    <br />
    <img
      src={paperImg}
      alt="Paper Description"
      style={{ width: "480px", height: "360px" }}
    />
    <br />
    <p style={{ textAlign: "left", width: "70%" }}>
      Our founder, Stu, embodies the spirit and determination that FRC
      represents. As a self-made entrepreneur and diligent worker, he
      understands the pulse of the blue-collar community. Apart from his
      impeccable business acumen, Stu is a dedicated family man with a profound
      love for the outdoors. An enthusiastic hunter and outdoorsman, he brings
      the same zest and zeal to FRC, ensuring that we cater to our community
      with the utmost dedication.{" "}
    </p>
    <br />
    <img
      src={stuImg}
      alt="Stu Description"
      style={{ width: "480px", height: "360px" }}
    />
    <br />
    <p style={{ textAlign: "left", width: "70%" }}>
      At FRC, we don't just sell clothes — we champion the spirit of
      perseverance, hard work, and authenticity. We take immense pride in being
      recognized as the most affordable FRC establishment in Louisiana, and we
      vow to uphold this reputation, serving our community with commitment and
      care.
    </p>
    <br />
  </div>
);

export default About;

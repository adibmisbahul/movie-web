import "./navbar.css";
import Image from "next/image";

import Avatar from "../public/image/avatar.jpeg";

export default function Navbar() {
  return (
    <>
      <div className="navcontainer">
        <Image
          className="navimage"
          src={Avatar}
          width={80}
          height={80}
          alt=""
        />
        <h1>Home</h1>
        <h1>About</h1>
        <h1>News</h1>
        <h1>Discover</h1>
        <h1>Comunity</h1>
        <button className="Logres">Login or Register</button>
      </div>
    </>
  );
}

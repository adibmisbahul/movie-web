import "./home.css";
import Image from "next/image";

import Drifting from "../image/Drifting Home.jpeg";

export default function Home() {
  return (
    <>
      <div className="homeback" id="home">
		<h1 className="text-center font-bold text-2xl pt-10">Your Weekend buddy for this week</h1>
        <div className="wrapmovie">
          <Image
            className="imagemovie"
            src={Drifting}
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

import "./home.css";
import Image from "next/image";

import Drifting from "../image/Drifting Home.jpeg";
import imagestar from "../image/start.svg";

export default function Home() {
  return (
    <>
      <div className="homeback" id="home">
        <h1 className="text-center font-bold text-2xl pt-10">
          Your Weekend buddy for this week
        </h1>
        <div className="wrapmovie">
          <Image
            className="imagemovie"
            src={Drifting}
            width={280}
            height={280}
            alt=""
          />
          <div className="wrapmovieright">
            <h1 className="text-[#0e1939] font-semibold text-xl ml-3 mt-5">
              Drifting Home
            </h1>
            <div className="wrapmovie2">
              <div className="wrapmovie2L text-black text-xs">
                <h1>Release Date</h1>
                <p>June 17, 2020</p>
              </div>
              <div className="wrapmovie2R text-black text-xs ml-10">
                <h1>Genre</h1>
                <p>Anime, Comedi</p>
                <h1>sinonpsis</h1>
              </div>
            </div>
            <div className="wrapmovie3 text-black text-sm">
              <div className="wrapmovie3L">
                <h1>8/10</h1>
                <h1>Rating by IMdb</h1>
              </div>
              <div className="wrapmovie3M">
                <div className="flex">
                  <Image src={imagestar} width={35} height={35} alt="" />
                  <Image src={imagestar} width={35} height={35} alt="" />
                  <Image src={imagestar} width={35} height={35} alt="" />
                  <Image src={imagestar} width={35} height={35} alt="" />
                  <Image src={imagestar} width={35} height={35} alt="" />
                </div>
              </div>
              <div className="wrapmovie3R"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

import AboutNav from "./AboutNav";

import "../Components/css/About.css";

export default function About() {
  return (
    <>
      <AboutNav />

      <div style={{ marginTop: "10rem" }}>
        <h1 class="top_heading">ABOUT ME</h1>
        <header>
          <h1>
            <span class="blue">Shivansh</span> Rawat
          </h1>
        </header>

        <div class="introduction_and_details">
          <div class="image">
            <img
              class="image"
              src="https://media.licdn.com/dms/image/D4D03AQFhXXfToCt_XQ/profile-displayphoto-shrink_800_800/0/1670418374670?e=1678320000&v=beta&t=NwQsVRMD5bcI7nDyo4MxNuydqgDpt6AFLOznpUaEpWo"
              alt="Owneer Profile Pic"
            />
          </div>
          <div class="details">
            <h2 className="h2">
              Name : <span id="blue">Shivansh Rawat</span>
            </h2>
            <h2 className="h2">
              Goal : <span id="blue"> Front End Developer</span>
            </h2>
            <h2 className="h2">
              College :{" "}
              <span class="school">
                Hemvati Nandan Bahuguna Garhwal University
              </span>
            </h2>
            <h2 className="h2">
              Email : <span id="blue">shivanshrawat587@gmail.com</span>
            </h2>
           
          </div>
        </div>
      </div>
    </>
  );
}

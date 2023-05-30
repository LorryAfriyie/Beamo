import Image from "next/image";
import beamoLogo from "../img/BeamoLogoDark.png";

// Contact
export default function About() {
  return (
    <section id="about">
      <div className="about-info-section">
        <div className="grid-even-columns">
          <div className="flow">
            <Image src={beamoLogo} alt={""} className="img-fluid" />
          </div>

          <div className="flow">
            <div className="block-grid">
              <div className="block-1">
                <h1>Beamo's Story</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt totam soluta laboriosam voluptates possimus
                  consequuntur, mollitia esse porro illum blanditiis atque
                  maiores architecto reprehenderit non hic ratione nihil dicta
                  placeat!
                </p>
              </div>

              <div className="block-2">
                <h1>Beamo's Story</h1>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt totam soluta laboriosam voluptates possimus
                  consequuntur, mollitia esse porro illum blanditiis atque
                  maiores architecto reprehenderit non hic ratione nihil dicta
                  placeat!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-team-section">
        <div className="team-grid-even-columns">
          <div className="flow">
            <div className="team-card shadow-md">
              <h1>Name</h1>
            </div>
          </div>

          <div className="flow">
            <div className="team-card">
              <h1>Name</h1>
            </div>
          </div>

          <div className="flow">
            <div className="team-card">
              <h1>Name</h1>
            </div>
          </div>

          <div className="flow">
            <div className="team-card">
              <h1>Name</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

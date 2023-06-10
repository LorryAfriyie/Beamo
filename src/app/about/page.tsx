import Image from "next/image";
import beamoLogo from "../img/BeamoLogoDark.png";

// Contact
export default function About() {
  const team = [
    {
      name: "Lawrence Afriyie",
      position: "Managing Director",
      image: "",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facere quo. Perspiciatis, beatae est. Enim repellat ullam assumenda et, veritatis doloremque praesentium ad tenetur ipsum illo? Omnis libero officiis sed.",
    },
    {
      name: "David Hagemann",
      position: "Design Chief Director",
      image: "../img/LA_LOGO.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat recusandae aliquam dolore aliquid assumenda pariatur harum consequuntur nulla sint veritatis, debitis rem? Harum modi fugiat repellat cumque, vel sit?",
    },
  ];
  return (
    <section id="about">
      <div className="about-info-section">
        <div className="grid-even-columns">
          <div className="flow">
            <div className="img-container">
              <Image src={beamoLogo} alt={""} className="img-fluid" />
            </div>
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
        <h1>Team Behind Beamo</h1>
        <div className="team-grid-even-columns">
          {team.map((x, index) => {
            return (
              <div key={index}>
                <div className="flow">
                  <div className="team-card shadow-md">
                    <div className="img-container">
                      <Image src={beamoLogo} alt={""} />
                    </div>

                    <h1>{x.name}</h1>
                    <h2>{x.position}</h2>

                    <div className="details-container">
                      <p>{x.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

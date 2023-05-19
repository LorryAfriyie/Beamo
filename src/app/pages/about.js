import Image from "next/image";
import logo from "../img/BeamoLogoDark.png";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-page-background"></div>

      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-md-6">
              <div className="logo-img-container">
                <Image src={logo} alt={logo} className="img-fluid logo" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="block-container">
                <div className="block-1" />

                <div className="block-2" />

                <div className="about-info">
                  <h1>About</h1>
                  <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ultricies lacus sed turpis tincidunt id aliquet
                    risus feugiat in. Nec tincidunt praesent semper feugiat nibh
                    sed pulvinar proin. Faucibus turpis in eu mi bibendum neque
                    egestas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

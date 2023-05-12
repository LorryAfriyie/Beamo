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
              <h1 className="display-3">About</h1>
              <Image src={logo} alt={logo} className="img-fluid logo" />
            </div>
            <div className="col-md-6">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ultricies lacus sed turpis tincidunt id aliquet risus feugiat
                in. Nec tincidunt praesent semper feugiat nibh sed pulvinar
                proin. Faucibus turpis in eu mi bibendum neque egestas. Facilisi
                nullam vehicula ipsum a arcu cursus vitae. Feugiat pretium nibh
                ipsum consequat nisl. Sem et tortor consequat id porta nibh
                venenatis cras. Convallis posuere morbi leo urna molestie at
                elementum eu facilisis. Velit euismod in pellentesque massa
                placerat duis ultricies. Est ullamcorper eget nulla facilisi
                etiam dignissim diam. Lectus arcu bibendum at varius vel. Nisl
                condimentum id venenatis a condimentum vitae sapien
                pellentesque. Cras semper auctor neque vitae. Id venenatis a
                condimentum vitae sapien pellentesque habitant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

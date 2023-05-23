import footerImg from "../img/BeamoHeaderLight.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <section style={{ height: "auto" }}>
      <Image src={footerImg} alt={footerImg} className="img-fluid" />
      <div className="footer">
        <div className="footer-text">
          <h2>Beamo</h2>
        </div>
      </div>
    </section>
  );
}

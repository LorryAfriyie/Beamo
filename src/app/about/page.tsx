import Image from "next/image"
import logo from '../img/BeamoImageHolder.jpg';
import dark from "../img/BeamoLogoDark.png";

// About 
export default function About() {
    return (
        <section id="about">

            <div className="grid">
                <div className="column">
                    <Image src={dark} alt={""} />
                </div>

                <div className="column">
                </div>

            </div>
        </section>
    )
}
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faLocation,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="display-4 section-title">Contact</h1>
        <div className="email-container">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                <p className="mb-1">+27 (0) 576 678 5674</p>
                <p>+27 (0) 678 124 5420</p>
              </div>

              <div className="mb-3">
                <p className="mb-1">beamocreategames@beamogames.com</p>
                <p>info@beamogames.com</p>
              </div>

              <div className="mb-3">
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              {/*  <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faLocationPin} /> */}
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="form-control mb-3"
                      placeholder="Fullname"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control mb-3"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="subject"
                        id="subject "
                        className="form-control"
                        placeholder="Message subject"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="mb-3 text-center">
                    <button type="button" className="btn btn-lg btn-primary">
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

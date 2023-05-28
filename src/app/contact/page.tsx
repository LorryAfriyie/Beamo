export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="column-left">
            <div className="contact-details">
              <p>Email: beamostudios@beamo.com</p>
            </div>

            <div className="contact-details">
              <p>Location: A108 Adam Street, New York, NY 535022</p>
            </div>

            <div className="contact-details">
              <h1>Contact: +27 (0) 68 143 6785</h1>
            </div>
          </div>

          <div className="column-right">
            <form action="" method="post">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Your name"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />

              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />

              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
              />

              <button type="submit" className="button shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

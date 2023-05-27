export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-container">
        <div className="grid">
          <div className="column-left">
            <p>Image is here</p>
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

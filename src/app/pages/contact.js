export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="display-4">Contact</h1>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="fullname" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>

                <div className="mb-3 mt-3">
                  <label htmlFor="subject" className="form-label">
                    Message subject
                  </label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject "
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="10"
                  ></textarea>
                </div>

                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
          consequatur impedit excepturi atque. Saepe nisi quaerat eius esse ea,
          modi quasi unde ullam alias molestias laborum beatae quos labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
          consequatur impedit excepturi atque. Saepe nisi quaerat eius esse ea,
          modi quasi unde ullam alias molestias laborum beatae quos labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
          consequatur impedit excepturi atque. Saepe nisi quaerat eius esse ea,
          modi quasi unde ullam alias molestias laborum beatae quos labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
          consequatur impedit excepturi atque. Saepe nisi quaerat eius esse ea,
          modi quasi unde ullam alias molestias laborum beatae quos labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
          consequatur impedit excepturi atque. Saepe nisi quaerat eius esse ea,
          modi quasi unde ullam alias molestias laborum beatae quos labore.
        </p>
      </div>
    </div>
  );
}

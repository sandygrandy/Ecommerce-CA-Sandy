function contactPage() {
  const submit = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div className="wrapper">
      <h1 className="center title">Contact Us</h1>
      <div className="contact-form-container">
        <form className="contact-form" action={submit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required minLength={3} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required minLength={3} />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            minLength={3}
          ></textarea>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default contactPage;

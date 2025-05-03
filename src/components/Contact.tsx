function Contact() {
    return (
      <section id="contact" className="py-20 px-4 bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-6 text-gray-600 ">
            Want to work together or just say hi? Reach out below.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 rounded border " />
            <input type="email" placeholder="Email" className="w-full p-3 rounded border " />
            <textarea rows={5} placeholder="Message" className="w-full p-3 rounded border "></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
          <div className="mt-6 space-x-4 text-blue-600 ">
            <a href="https://github.com/Vipplynn" target="_blank">GitHub</a>
            <a href="mailto:christianc0000@gmail.com">Email</a>
            <a href="https://linkedin.com/in/chochristian" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  
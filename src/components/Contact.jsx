export default function Contact(){
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form action="https://formspree.io/f/mnnzynpk" method="POST" className="space-y-4 max-w-xl mx-auto">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-lg"/>
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-lg"/>
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded-lg"></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">Send</button>
      </form>
    </section>
  )
}

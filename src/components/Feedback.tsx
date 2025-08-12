
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// You need to install emailjs-com: npm install emailjs-com
import emailjs from 'emailjs-com';

const Contact = ({ style }: { style: React.CSSProperties }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const message = messageRef.current?.value || '';
    if (!name || !email || !message) {
      toast.error('Please fill all fields!');
      return;
    }
    // EmailJS config (replace with your own service/template/user IDs)
  const serviceID = 'service_glr6q0e';
  const templateID = 'template_ojointl';
  const userID = 'DY-2iIDtwEklU2bdd';
    const templateParams = {
      name: name,
      title: message,
      email: email,
    };
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        toast.success('Message sent successfully!');
        if (nameRef.current) nameRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <section
        id="contact"
        className="min-h-[100vh] flex flex-col justify-start items-center relative pt-20 pb-12 scroll-mt-20 px-4"
        style={style}
      >
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text drop-shadow-[0_4px_20px_rgba(74,222,128,0.5)] animate-fade-in text-center" style={{
            textShadow: "0 4px 32px #4ade80, 0 1px 0 #fff, 0 8px 32px #4ade80, 0 0px 100px #4ade80"
          }}>Contact Us</h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-green-100 max-w-4xl text-center mx-auto animate-fade-in delay-200 mb-8 leading-relaxed px-4">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, our team is here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSend} className="flex flex-col gap-6 w-full max-w-4xl mx-auto bg-black/40 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-md animate-fade-in delay-200 border border-green-500/20 translate-z-0">
          <div className="flex flex-col gap-2">
            <label className="text-lg sm:text-xl text-green-300 font-medium pl-2 select-none">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-green-900/80 text-white text-base sm:text-xl border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-400/30 transition-shadow duration-300 hover:border-green-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg sm:text-xl text-green-300 font-medium pl-2 select-none">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-green-900/80 text-white text-base sm:text-xl border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-400/30 transition-shadow duration-300 hover:border-green-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg sm:text-xl text-green-300 font-medium pl-2 select-none">Your Message</label>
            <textarea
              placeholder="How can we help you?"
              rows={6}
              ref={messageRef}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-green-900/80 text-white text-base sm:text-xl border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-400/30 transition-shadow duration-300 hover:border-green-700 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xl sm:text-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-green-500/50 select-none transform-gpu"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 animate-fade-in delay-200 pb-4">
            <img
              src="/src/assets/freeze ig post 11.png"
              alt="Freeze Cheers"
              className="w-full max-w-sm h-64 sm:h-80 object-cover rounded-2xl border-4 border-green-300 shadow-2xl"
              style={{ filter: "drop-shadow(0 0 40px #4ade80)" }}
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-green-200 mb-4">Thank You!</h3>
              <p className="text-xl sm:text-2xl text-green-100 leading-relaxed">
                Every message, suggestion, and story from our fans inspires us to keep innovating. Thank you for being part of the Freeze family!
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default Contact;

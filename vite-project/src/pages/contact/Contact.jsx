import React from 'react';
import NavBar from '../../components/navbar/Index';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-[60vh] py-8 px-2 bg-gray-7800">
        <div className="w-full max-w-xl bg-gray-800 border-2 border-gray-400 rounded-3xl shadow-2xl p-8 flex flex-col gap-8">
          <h2 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight drop-shadow">Contact Us</h2>
          <p className="text-lg text-gray-200 text-center leading-relaxed">We love connecting with our customers! For questions, feedback, or support, reach out and our friendly team will be happy to help you.</p>
          <a href="tel:12345678901" className="block text-center text-lg font-bold text-white bg-gray-600 hover:bg-gray-500 transition rounded-full py-3 shadow-lg ring-2 ring-gray-400 hover:ring-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400">📞 Call us: 123-456-78901</a>
          <p className="text-gray-300 text-center text-base">Our customer care is available <span className="font-semibold text-white">Monday to Friday, 9am - 6pm</span>. We look forward to hearing from you!</p>
          <div className="w-full aspect-video rounded-2xl overflow-hidden border-2 border-gray-400 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.94900874932!2d3.375321874465664!3d6.528124723110659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8daa6a0f5705%3A0xc5541f2c744aa377!2s15%20Alh.%20Kalejaiye%20St%2C%20Igbobi%2C%20Lagos%20100231%2C%20Lagos!5e0!3m2!1sen!2sng!4v1757202678003!5m2!1sen!2sng"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              title="Our Location"
            ></iframe>
          </div>
          <p className="text-gray-200 text-center text-base">
            <span className="font-bold text-white">Address:</span> 15 Alh. Kalejaiye St, Igbobi, Lagos 100231, Lagos
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

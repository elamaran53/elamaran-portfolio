// import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";



export const Contact = () => {

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 flex-col"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className=" message w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
               
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="message w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="message w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
               
              />
            </div>

            <button
              type="submit" 
              className=" cursor-pointer  message w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      <div>
          <div className="flex justify-center space-x-10 mt-10"> 
            <a href="https://github.com/elamaran53">
            <img src="./github.svg" alt="" className="w-[40px] border-blue-400  bg-blue-500 rounded-full border cursor-pointer transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-white" />
            </a>

            <a href="https://www.linkedin.com/in/elamaran-frontend-developer/">
            <img src="./linkedin.svg" alt="" className="w-[40px] border-blue-400  bg-blue-500 rounded-full border cursor-pointer transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-white " />
            </a>
            <a href="https://www.instagram.com/ela__maran__/">
            <img src="./insta.svg" alt="" className="w-[40px] border-blue-400  bg-blue-500 rounded-full border cursor-pointer transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-white  " />
            </a>
            
            <a href="https://www.facebook.com/tamil.elamaran.1">
            <img src="./facebook.svg" alt="" className="w-[40px] border-blue-400  bg-blue-500 rounded-full border cursor-pointer transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-white " />
            </a>
          </div>
          </div>
          <div className=" footer font-bold mt-8 mb-[-4rem] bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
         <p className="text-xl">&copy;  2025  Elamaran. All Rights Reserved.</p>
          </div>
    </section>
    
    
  );
};

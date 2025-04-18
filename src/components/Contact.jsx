import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="bg-black text-white py-20 " id="contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Me </h1>

          <div className="flex flex-cols md:flex-row items-center md:space-x-12">
            <div className="flex-1">
              <h3 className="text-2xl mb-2">Let's Talk</h3>
              <p>
              I'm always open to discussing web development projects, collaborations, or partnership opportunities. Whether you have an idea, need a developer for your team, or just want to connect — feel free to reach out!
              </p>
              <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2" />

                <a
                  href="mailto:mahatojayprakash05@gmail.com"
                  className="hover:underline"
                >
                  mahatojayprakash05@gmail.com
                </a>
              </div>
              <div className="mb-4 mt-8">
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>+9137395330</span>
              </div>
              <div className="mb-4 ">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                <span>navi mumbai , 400706 ,india</span>
              </div>
            </div>
            <div
              className="flex-1 w-full"
              
            >
              <form action="mailto:mahatojayprakash05@gmail.com"
              method="POST" encType="text/plain" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-gray-800 border rounded focus:outline border-gray-600"
                  ></input>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 bg-gray-800 border rounded focus:outline border-gray-600 focus:border-green-400 focus:outline-none"
                  ></input>
                </div>
                <div>
                  <label htmlFor="message">Message </label>
                  <textarea
  name="message"
  rows="5"
  placeholder="Enter Your Message"
  className="w-full p-2 bg-gray-800 border rounded focus:outline-none focus:border-green-400 border-gray-600"
/>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 tect-white  md:inline py-2 px-4 hover:scale-105 transform transition-transform hidden duration-300 rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

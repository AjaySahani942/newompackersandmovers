import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneVolume,  FaGlobe } from "react-icons/fa";
import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a35nj5o",
        "template_sco4kjo",
        form.current,
        "SoSNBzgNv6qvTcgzU"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("your email has been sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mx-auto pt-16">
      <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5 bg-[#00838C] pt-[2rem] xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
              Get in touch
            </h1>
            <p className="text-xl text-white  pb-8 leading-relaxed font-normal lg:pr-4">
              Near Shiv Mandir Habart Bandha Elaahibaag Road Basantpur Gorakhpur
              - 273005
            </p>
            <div className="flex pb-4 items-center ">
              <div>
                <FaPhoneVolume className="text-white" size={28} />
              </div>
              <p className="pl-4 text-white text-base hover:text-gray-300 ease-in">
                <a href="tel:+918853503889" target="_blank" rel="noreferrer">
                  {" "}
                  +91 88535 03889
                </a>
              </p>
              <p className="pl-4 text-white text-base hover:text-gray-300 ease-in">
                <a href="tel:+917786860700" target="_blank" rel="noreferrer">
                  +91 77868 60700
                </a>
              </p>
            </div>
            <div className="flex pb-4 items-center">
              <div>
                <AiTwotoneMail className="text-white" size={28} />
              </div>
              <p className="pl-4 text-white text-base hover:text-gray-300 ease-in">
                <a
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  newompackersandmovers787@gmail.com
                </a>
              </p>
            </div>
            <div className="flex pb-4 items-center">
              <div>
                <AiOutlineMail className="text-white" size={28} />
              </div>
              <p className=" pl-4 text-white text-base hover:text-gray-300 ease-in">
                <a
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@newompackersandmovers.com
                </a>
              </p>
            </div>
            <div className="flex pb-4 items-center ">
              <div>
                <FaGlobe className="text-white " size={28} />
              </div>
              <p className="pl-4  text-white text-base  hover:text-gray-300 ease-in">
                <a
                  href="https://www.newompackersandmovers.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  www.newompackersandmovers.com
                </a>
              </p>
            </div>
            <p className=" text-lg text-white pt-8 tracking-wide ">
              <ul>
                <li>
                  {" "}
                  <strong>Bank Name :</strong> Indian bank
                </li>
                <li>
                  {" "}
                  <strong> Account Name :</strong> Rishu Yadav
                </li>
                <li>
                  {" "}
                  <strong> Account Number :</strong> 50403963676
                </li>
                <li>
                  {" "}
                  <strong> IFSC Code :</strong> IDIB000G611
                </li>
                <li>
                  {" "}
                  <strong> GST No :</strong> 09ATTPY0129L1ZU
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contact"
            className="bg-white py-4 px-8 rounded-tr rounded-br"
          >
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
              Enter Details
            </h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    id="full_name"
                    name="user_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-[#00838C] font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email_from"
                    type="email"
                    className="focus:outline-none focus:border focus:border-[#00838C] font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    required
                    id="phone"
                    name="user_number"
                    type="tel"
                    className="focus:outline-none focus:border focus:border-[#00838C] font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-800 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  placeholder
                  name="message"
                  className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-[#00838C]"
                  rows={8}
                  id="message"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="focus:outline-none bg-[#00838C] transition duration-150 ease-in-out hover:bg-[#00838ccf] rounded text-white px-8 py-3 text-sm leading-6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* 2nd */}
      <div className="pt-4">
        <iframe
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3563.102904228005!2d83.3489621150413!3d26.741092083201824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ0JzI3LjkiTiA4M8KwMjEnMDQuMSJF!5e0!3m2!1sen!2sin!4v1677073490823!5m2!1sen!2sin" 
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

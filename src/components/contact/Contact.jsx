import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import imageEmail from "../../assets/images/imageEmail.gif";
import thankYou from "../../assets/images/thankYou3.gif";

const Contact = ({contactRef}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section ref={contactRef} className="contact-section">
      <div className="flex sm:flex-col lg:flex-row lg:px-20 py-[50px] sm:px-2 sm">
        <div className=" basis-1/2 flex flex-col justify-center sm:items-center">
          <div className="sm:p-3 lg:p-10 sm:w-[75%]">
            <img src={imageEmail} alt="ImageEmail" />
          </div>
        </div>
        <div className=" basis-1/2 h-full sm:p-3 lg:p-20">
          <div className="email-container bg-black basis-1 h-full flex flex-col gap-3">
            <div className="flex justify-center">
              <img src={thankYou} alt="thankyou" className="w-[70%]"  />
            </div>
            <div className="emailjs-container  h-full">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="email-form h-full p-5 bg-black rounded-xl border border-l-gray border-b-gray
              flex flex-col gap-3 justify-between items-center text-3xl text-black font-Playfiar"
              >
                <div className="w-full flex flex-col gap-3">
                  <label className="text-violet">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="h-10 rounded-lg"
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label className="text-violet">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="h-10 rounded-lg"
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label className="text-violet">Message</label>
                  <textarea name="message" className="rounded-lg" />
                </div>
                <div className="w-full flex flex-col gap-3 lg:items-center">
                  <input
                    type="submit"
                    value="Send"
                    className="bg-darkblue lg:w-[25%] text-yellow rounded-xl hover:scale-125 duration-150 p-1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

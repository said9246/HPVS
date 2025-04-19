import React, { useState } from "react";
import contact from "../../assets/neww.avif";
import Footer from "../../components/Footer";

const Contact = () => {
    const[state,setState] = useState({
        name : "",
        email:'',
        subject:'',
        message:''
      });
      const inputHandle=(e)=>{
        setState({
          ...state,
          [e.target.name] : e.target.value
        })
      }
      const submit =(e)=>{
        e.preventDefault()
        console.log(state)
      }
  return (
    <div>
      <div>
        <img
          src={contact}
          alt=""
          className="w-[100%] md:h-[80vh] relative bg-[#00000038]"
        />
        <p className="absolute left-[20%] md:left-[38%] top-[13%] md:top-[30%] text-white text-[50px] md:text-[65px] font-semibold">
          Contact Us
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 pl-10 md:pl-20 pr-10 md:pr-20 mt-10 md:mt-20 mb-20">
        <div>
          <p className="text-[30px] font-semibold mb-10">GET IN TOUCH</p>
          <form onSubmit={submit}>
            <div className="md:flex gap-5 mb-4">
              <span className=" flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={inputHandle}
                  value={state.name}
                  required
                  placeholder="Enter your Name"
                  className="h-[40px] md:w-[257px] border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                />
              </span>
              <span className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[13px] font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={inputHandle}
                  value={state.email}
                  required
                  placeholder="Enter your Email"
                  className="h-[40px] md:w-[257px] border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                />
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className=" flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-medium">
                  Your Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  onChange={inputHandle}
                  value={state.subject}
                  required
                  placeholder="Subject..."
                  className="border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                />
              </span>
              <span className=" flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  onChange={inputHandle}
                  value={state.message}
                  cols="30"
                  rows="5"
                  placeholder="Enter your Message"
                  className="border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                ></textarea>
              </span>
              <div>
                <button className="bg-[#2250fcff] hover:bg-[#3651b5] h-[40px] w-[150px] rounded-lg text-white text-[14px] font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <p className="text-[30px] font-semibold mb-10">ADDRESS & MAP</p>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9908546224415!2d5.168573975710809!3d52.22538395800143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66b67a13ec7ff%3A0x6baa214975506856!2sDe%20Nederlandse%20Kluis!5e0!3m2!1sen!2s!4v1700291038162!5m2!1sen!2s"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
          <div className="flex gap-5 mt-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#3c4043] text-[15px] font-semibold">Holland Private Valuat & Shipping , Inc.</p>
              <p className="text-[#5b5959] text-[14px]">'s-Gravelandseweg 19, 1211 BN Hilversum, Netherlands</p>
              <p className="text-[#5b5959] text-[14px]">P: +31108903966</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

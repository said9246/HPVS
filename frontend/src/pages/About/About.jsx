import React, { useState } from "react";
import about from "../../assets/about.jpg";
import Footer from "../../components/Footer";

const About = () => {
  const [selectedBtn, setSelectedBtn] = useState("who_we_are");

  return (
    <div className="flex flex-col font-pop">
      <div className="text-white">
        <img src={about} alt="" className="w-full h-[400px] relative" />
        <div className="absolute left-10 md:left-[20%] top-40 md:top-[30%] text-center">
          <p className="text-[16px] font-bold">WHO WE ARE</p>
          <h1 className="text-[30px] md:text-[70px] font-extrabold">
            About our company
          </h1>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:flex-row pl-[50px] md:pl-0">
        <div className="w-[30%] flex justify-center flex-col md:flex-row">
          <p className="text-[40px] font-[600]">
            THE <br />
            COMPANY
          </p>
        </div>
        <div className="w-[80%]">
          <div className="flex flex-col gap-5 mb-[3rem]">
            <p className="text-[20px] font-[500]">Overview</p>
            <p className="w-[90%] text-[15px] text-[#3c4043]">
              Our physical security services are designed to fully integrate
              with your requirements, likewise to provide the maximum protection
              for your workers and assets. We believe that real security
              challenges require real security solutions by competent
              professionals
            </p>
          </div>
          <div>
            <p className="w-[90%] text-[15px] text-[#3c4043] border-l-2 border-blue-700 pl-5 pt-2 pb-2">
              As a global leader in Safe keeping solutions, we actively work to
              ensure that all our operational processes are as responsible and
              sustainable as feasible.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-[50px]">
            <div className="h-[22%] flex flex-col text-[#3c4043] gap-[28px] text-[15px] font-medium border-r-2 border-[#3c404355] pr-6 pt-1 pb-1">
              <p
                className={`cursor-pointer hover:text-blue-700 ${
                  selectedBtn == "who_we_are" ? "text-blue-700" : ""
                }`}
                onClick={() => setSelectedBtn("who_we_are")}
              >
                Who we are
              </p>
              <p
                className={`cursor-pointer hover:text-blue-700 ${
                  selectedBtn == "mission" ? "text-blue-700" : ""
                }`}
                onClick={() => setSelectedBtn("mission")}
              >
                Our Mission
              </p>
              <p
                className={`cursor-pointer hover:text-blue-700 ${
                  selectedBtn == "safety" ? "text-blue-700" : ""
                }`}
                onClick={() => setSelectedBtn("safety")}
              >
                Safety & Security
              </p>
            </div>
            <div className="w-[100%] md:w-[70%] pl-6 text-[14px] text-[#3c4043d1]">
              <div className="flex flex-col gap-3">
                {selectedBtn == "who_we_are" ? (
                  <>
                    <p>...</p>
                    <p>
                      As a global leader in security solutions, we actively work
                      to ensure that all our operational processes are as
                      responsible and sustainable as feasible.
                    </p>
                    <p>
                      We comply with the OECD regulations on responsible mineral
                      supply chains and in 2014, we signed the UN Global
                      Compact’s Business for Peace initiative. This means that
                      together with governments and non governmental
                      organisations we work to implement responsible practices
                      in high-risk and conflict-affected areas to promote
                      stability, beneficial development and the advancement of
                      peace.
                    </p>
                    <p>
                      {" "}
                      We Risk Management team regularly audits gold and silver
                      mines and operational processes worldwide. We understand
                      the importance of the ‘Responsible Gold’ approach and are
                      members of global groups and associations including the
                      LBMA (London Bullion Market).
                    </p>
                  </>
                ) : selectedBtn == "mission" ? (
                  <>
                    <p>...</p>
                    <p>
                      Anything else represents failure to acknowledge the
                      obvious and worst, failure to address reasonably
                      foreseeable liabilities. We provide advance technology and
                      help our clients meet their obligation to provide a world
                      class safety vault for their asset.
                    </p>
                    <p>
                      We believe that good security is an attainable goal that
                      is achieved through a unyielding executive commitment to
                      methodical training, preparation and resources. When you
                      are ready to explore the difference between "an ordinary
                      security company" and real security from Dynamic Private
                      Vault please contact us for a confidential consultation.
                    </p>
                  </>
                ) : (
                  <>
                    <p>...</p>
                    <p>
                      Vault Doors and walls are categorized as an UL 6 compliant
                      and has undergone rigorous testing conducted by our highly
                      skilled operators. Our specialized “man-trap” doors are
                      designed to authenticate each individual’s details and can
                      withstand any attack.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  mt-[10%] w-[100%]  text-white">
        <div className="bg-[#917d5dff] flex flex-col p-[50px] gap-4">
          <p className="text-[20px] font-semibold">CORPORATE MISSION</p>
          <p>
            Provide the highest quality service to our clients by combining
            highly-skilled team members with our proven methodology and
            consistently improve our deliverables to our clients and add value
            to your organization etc.
          </p>
        </div>
        <div className="bg-[#a08c6cff] flex flex-col p-[50px] gap-4">
          <p className="text-[20px] font-semibold">OUR VISION</p>
          <p>
            Our vision is to provide sustainable economic opportunities to any
            investor in Sierra Leone. We want to be a trusted part of every
            potential investors business from formation to security and
            consultancy.
          </p>
        </div>
        <div className="bg-[#ad9979ff] flex flex-col p-[50px] gap-4">
          <p className="text-[20px] font-semibold">OUR GOAL</p>
          <p>
            Forge lasting relationships with our clients by listening and
            addressing your needs in a manner which will allow you, as well as
            us, to be successful and to support our employees in a way that
            fosters learning, growth and recognition for superior performance.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-[90px] mb-[80px] justify-center items-center">
        <p className="pl-4 md:pl-0 text-[30px] font-semibold">
          Join the thousands that have a good story to tell
        </p>
        <p className="pl-4 md:pl-0 text-[15px] text-[#5b5959]">
          This is not too good to be true, make your own history and tell your
          story in future
        </p>
        <button className="bg-[#2250fcff] rounded-[70px] pt-[15px] pb-[15px] pl-[30px] pr-[30px] text-white mt-6 hover:bg-[#3960ff]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;

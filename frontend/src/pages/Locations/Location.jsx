import React from "react";
import Footer from "../../components/Footer";

const Location = () => {
  return (
    <div>
      <div className="flex flex-col h-[50vh] w-[100%] gap-4 bg-[#f1f1f3ff] items-center justify-center">
        <p className="text-[60px]">Locations</p>
        <p className="text-[16px] text-[#5b5959]">
        Holland Private Valuat & Shipping  Physical Storage Locations
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-center mt-[6%] mb-[4%] pl-4 pr-4 md:pl-[80px] md:pr-[80px]">
        <p className="font-semibold">ALL LOCATIONS</p>
        <p className="text-[#5b5959] text-[18px] font-[400]">
           We carefully chose these countries with security and
          other important benefits in mind. SIVOCS's vault are made of steel bar
          reinforced concrete vault protected with industry-leading security and
          surveillance features.
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center text-[50px] font-extrabold mb-[5%]">
        <p>Dubai</p>
        <p>Honkong</p>
        <p>Italy</p>
        <p>London</p>
        <p>Singapore</p>
        <p>Turkey</p>
      </div>
      <div className="flex flex-col gap-4 mt-[90px] mb-[80px] justify-center items-center">
        <p className="pl-4 md:pl-0 text-[30px] font-semibold">Join the thousands that have a good story to tell</p>
        <p className="pl-4 md:pl-0 text-[15px] text-[#5b5959]">This is not too good to be true, make your own history and tell your story in future</p>
        <button className="bg-[#2250fcff] rounded-[70px] pt-[15px] pb-[15px] pl-[30px] pr-[30px] text-white mt-6 hover:bg-[#3960ff]">Get Started</button>
      </div>
    </div>
  );
};

export default Location;

import "./Services.css";
import { FaPlug } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
const Services = () => {
  const services = [
    {
      heading: "Secure Vault Storage",
      details:
        "We provide globally integrated end-to-end solutions tailored to our customers’ supply chain management needs.",
        icon:"plug"
    },
    {
      heading: "Safekeeping",
      details:
        "We provide a specialist safety deposit box service for the safe keeping of your assets such as birth certificate etc",
        icon:"blub"
    },
    {
      heading: "Jewellery Storage",
      details:
        "We are committed to protecting your family heirlooms, precious metals, time pieces and priceless collections.",
        icon:"plug"
    },
    {
      heading: "Document Storage",
      details:
        "By utilizing our storage vault, your irreplaceable documents are protected from unforeseen events.",
        icon:"plug"
    },
    {
      heading: "Bullion Storage",
      details:
        "We specializes in safe keeping of your most valuable precious gold and silver commodities.",
        icon:"plug"
    },
    {
      heading: "Fine Art Storage",
      details:
        "Built to the highest industry specification with Non-Liquid Fire Protection and round-the-clock Climate & Humidity Control.",
        icon:"blub"
    },
  ];
  return (
    <div className="services">
      <div className="bg_overlay">
        <div className="content">
          <h5>Our </h5>
          <h1>Services</h1>
        </div>
      </div>

      <div className="what_we_do">
        <div className="heading">
          <h1 className="text-3xl ">What we do</h1>
          <hr className="custom_border w-18 h-1 mx-auto" />
        </div>
        <div className="we_do_container">
          {
            services.map((service)=>(
                <>
                <div className="we_do">
            <div className="icon">
              {service.icon=="plug"?<FaPlug />:<FaLightbulb />}
            </div>
            <div className="heading">
            {service.heading}
            </div>
            <div className="message">
            {service.details}
            </div>
          </div>
                </>
            ))
          }
        </div>
      </div>

      <div className="see_by_yourself py-52 flex flex-col gap-5 justify-center items-center text-center">
        <img src="https://ourierge.com/assets/images/services/67.jpg" className="h-96 rounded-md" alt="" />
        <h2 className="text-3xl">See by yourself</h2>
        <h1 className="text-4xl">The most affordable services</h1>
        <div className="custom_border h-1 w-20"></div>
        <button>Get Started</button>
      </div>
    </div>

  );
};

export default Services;

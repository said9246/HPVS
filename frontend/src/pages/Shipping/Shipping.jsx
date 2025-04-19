import "./Shipping.css"
import { FaGift } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
const Shipping = () => {
  return (
    <div className="shipping_page">

        <div className="bg_overlay1">
    <div className="layer">
    </div>
        <div className="content">
          
          <h1 className='text-4xl font-extrabold tracking-widest'>Shipping & Delivery </h1>
        </div>
      </div>

      <div className="shipping_page_content">
<h1>International Freight</h1>
<p>Freight Consolidator - offering ocean and air cargo transportation covering both import as well as export. Providing weekly consolidation and services to and from over 50 countries - Asia, Europe, and most of South/Central America - we can ensure you access to virtually all port and airport pairs under the safety of our own contracts. You will be able to access our multiple carrier selections in every mode of transportation - ensuring that your cargo moves rapidly year-round, at your required price point and transit time.</p>
<br />
<p>We know that global reach and stability are your keys to success. In addition to our 11 locations in China and Hong Kong our partners around the world have been working with the AIC family for over 20 + years. Sharing our core principles and attention to customer service, they will work hard to earn your confidence and trust each time that you partner with them. This ability to respond to your needs and provide outstanding service, in a united manner, is why we our motto is: “Two Hemispheres – One Global Solution”.</p>
<h1>Ocean</h1>
<p>We offer full container ocean shipping on as many as 10-12 different “direct” carrier contracts. This enables AIC to offer multiple carriers per trade lane each with variable cut off time, transit times and cost structures. You can fully customize your supply chain to reflect your cargo’s desired timeline: scaled pricing structure, reflecting desired turnaround and cost to most all transits cost requirements.</p>
<br />
<p>Need to ship less than a full container, no problem. AIC offers weekly consolidation services to/from over 50 plus countries that we service. Even if you purchase from multiple suppliers within a given geographic region we have the capability to consolidate your “less than container” (LCL) shipments into a single consignee full container - helping you maximize efficiencies and reduce shipping expenses.</p>
<h1>Container Management</h1>
<br />
<p>Sometimes, just moving cargo at the cheapest possible price is not always the most cost effective solution in the long run. Why take the risk of signing your own carrier contracts - we can show you how to get the best of both worlds and save on expenses at the same time. AIC offers a “break out” service where the supply chain requirements that the ocean carriers cannot provide are offered regardless of the fact that the shipments move on your contracts. By securing these services from AIC you will realize the full impact of your negotiated cost savings.</p>
<ul>
    <li>Container Space Booking Services</li>
    <li>Tracking at the SKU/PO# level</li>
    <li>Container Manifests</li>
    <li>Document Handling</li>
    <li>Visibility</li>
    <li>Information Flow</li>
    <li>Pro-Active Freight Management between multiple carriers (so cargo does not lay over)</li>
</ul>
<h1>Air</h1>
<p>We have the flexibility to handle small shipments, build an airline pallet, or even charter an entire aircraft.</p>
<ul>
    <li>Direct Service</li>
    <li>Deferred Service</li>
    <li>Both Sea and Air Combinations</li>
</ul>
<div className="track_package flex flex-col gap-5 py-6  text-center my-28">
    <h2 className="text-3xl">Ready to track your package?</h2>
    <p>Our easy to use tracking system helps you track your pacakges across all devices in the comfort of your home.</p>
    <button className="text-md bg-blue-700 w-fit mx-auto py-3 px-4 text-white rounded-lg">TRACK NOW</button>
</div>
<div className="offers flex ">
    <div className="offer">
    <div className="icon">

<FaGift className='text-4xl'/>
    </div>
<div className="details">
    <span>
    Discount on orders $200+
    </span>
    <p>
    Order more than $200 and you will get a discount on shippining Worldwide.
    </p>
</div>
    </div>



    <div className="offer">
    <div className="icon">

<FaPlane className='text-4xl'/>
    </div>
<div className="details">
    <span>
   
Worldwide delivery
    </span>
    <p>
    We deliver to the following destinations: USA, Canada, Europe, Australia
    </p>
</div>
    </div>




    <div className="offer">
    <div className="icon">

<IoIosTimer className='text-4xl'/>
    </div>
<div className="details">
    <span>
   

    60 days money back guranty!
    </span>
    <p>
    Not happy with our product, feel free to return it, we will refund 100% your money!
    </p>
</div>
    </div>
</div>
      </div>
    </div>
  )
}

export default Shipping
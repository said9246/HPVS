import "./components.css"
import { IoDiamond } from "react-icons/io5";
const Hero = () => {
  return (
    <div className='hero'>
         <div className="video_overlay">
        <video autoPlay muted loop id="myVideo">
          <source src="./videos/logistics.mp4" type="video/mp4" />
                </video>
      </div>
        <div className="hero_content">
            <h1 className="hero_title"><IoDiamond />
</h1>
            <h2 className="hero_subtitle">Holland Private Vault & Shipping</h2>
<p>We offer the best integrated and maximum security option for
your bullion assets.</p>
            <button className="hero_btn">GET STARTED</button>
            </div>

    </div>
  )
}

export default Hero
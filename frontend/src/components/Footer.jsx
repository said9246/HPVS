import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div className='flex flex-col font-pop'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between pl-6 pr-6 pt-[50px] pb-12 bg-[#f9f9fa]'>
            <div className='flex flex-col gap-4 pl-4'>
                <p className='text-[#3c4043ff] font-semibold text-[16px]'>Holland Private Vault & Shipping </p>
                <p className='text-[14px] text-[#5b5959]'>Global leader in Safekeeping & security solutions</p>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
                <p className='text-[#3c4043ff] font-semibold text-[16px]' >RESOURCES</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to={"/track"}>Track Asset</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to={"/track"}>Track Shipping</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
            <p className='text-[#3c4043ff] font-semibold text-[16px]'>LOCATIONS</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to="/location">Dubai</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to="/location">Hongkong</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to="/location">Italy</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to="/location">London</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to="/location">Singapore</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop} to="/location">Turkey</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
            <p className='text-[#3c4043ff] font-semibold text-[16px]'>SERVICES</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                
                    <li className='hover:text-[#2250fcff]' ><Link to={"/storage"}  onClick={scrollToTop}>Secure Vault</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/storage"} onClick={scrollToTop}>Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/storage"} onClick={scrollToTop}>Safe Keeping</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/storage"} onClick={scrollToTop}>Jewellery Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/storage"} onClick={scrollToTop}>Document Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/storage"} onClick={scrollToTop}>Bullion Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/storage"} onClick={scrollToTop}>Fine Art Storage</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
            <p className='text-[#3c4043ff] font-semibold text-[16px]'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link onClick={scrollToTop}>Terms of Service</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to={"/login"} onClick={scrollToTop}>Admin Login</Link></li>
                </ul>
            </div>
        </div>
        <div className='bg-[#f1f1f3ff] flex justify-center items-center pt-9 pb-9 text-[14px] text-[#3c4043ff]'>
            <p>© 2023 Holland Private Vault & Shipping  - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
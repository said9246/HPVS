import React from 'react'
import "./Storage.css"
import { FaWarehouse } from "react-icons/fa";
const Storage = () => {
  return (
    <div className='storage_page'>
 <div className="bg_overlay2">
    <div className="layer">
    </div>
        <div className="content">
          
          <h1 className='text-4xl font-extrabold tracking-widest'> Storage </h1>
          <h5>Do not keep your irreplaceable precious Jewellery at home if they really matter to you.</h5>
        </div>
      </div>
      <div className="storage_page_content">
<div className="header">
<FaWarehouse  className='text-8xl'/>
<h1 className='text-4xl'>Allocated & Segregated Storage</h1>
<h4 className='text-xl'>Independent of Banks and offshore</h4>
</div>
<div className="storage_page_content_table_container">
<div className="left">
<h4 >The allocated & segregated storage of gold and silver</h4>
<p>For investors who want to store their precious metals – such as gold, silver, platinum or palladium – as well as their other valuables in a safe place outside of a bank, so-called allocated & segregated storage or individual custody is a viable option. Behind the service is an individualised system for the storage of valuables which are held in private, high-security vaults and safes or in either duty-free (ZFL) or open bonded warehouses (OZL). Such warehouses are particularly attractive for the storage of white metals, because the purchase, sale and storage of them are possible without tax.
<p>

The storage allows for the safekeeping of your property via a contract of custody which is drawn up in accordance with the Our Code of Obligations. All stocks are stored with bar or seal numbers allocated and segregated on pallets or placed in special lockers. Unlike a collective storage system, investors get back exactly the same precious metals that they had originally deposited.
</p>

</p>
</div>
<div className="right">
<h4>Advantages of segregated valuables storage</h4>
<p>By depositing your precious metals physically outside of the banking sector with us, you will benefit from insurance through our partner Lloyds of London. This constitutes a full-risk insurance and covers the risk of, inter alia, theft, robbery and fraud, as well as fire risks and water damage. Due to the segregated storage in your name your values are never on our balance sheet, so you do not have to worry about losing it in the unlikely event of bankruptcy of the storage provider.
</p>
<p>
Your valuables remain your property at all times and are stored with full discretion. If you wish, We will take care of any storage and retrievals on your behalf. You don’t have to be on site in person – we only need your written order.

</p>
</div>
</div>
<div className="join_us flex flex-col py-32 justify-center text-center items-center gap-6 ">
    <h1 className='text-3xl'>Join the thousands that have a good story to tell</h1>
    <p>This is not too good to be true, make your own history and tell your story in future</p>
    <button >Get Started</button>
</div>
      </div>
    </div>
  )
}

export default Storage
import React from 'react'
import ProductCard from '../Components/ProductCard.jsx'
import './style.css'
import NavPage from './Navpage.jsx'
import { Link } from 'react-router-dom'
function Productpage() {
  return (
    <>
    <NavPage />
    <div className='Product'>
        <ProductCard link='.\src\assets\AC.jpg' name='Air Conditioner' price={85000}/>
        <ProductCard link='.\src\assets\adidas shoe.jpg' name='Adidas Shoe' price={12000}/>
        <ProductCard link='.\src\assets\Airpods.jpg' name='Airpods 6' price={10000}/>
        <ProductCard link='.\src\assets\blowdrybrush.jpg' name='Blower Brush' price={5000}/>
        <ProductCard link='.\src\assets\coffeemaker.jpg' name='Coffee Maker' price={3000}/>
        <ProductCard link='.\src\assets\download.jpg' name='JBL Speaker' price={2000}/>
        <ProductCard link='.\src\assets\firebolttalkwatch.jpg' name='Fire Bolt Talk Watch' price={13000}/>
        <ProductCard link='.\src\assets\hairdryer.jpg' name='Hair Dryer' price={2000}/>
        <ProductCard link='.\src\assets\hp laptop.jpg' name='HP Laptop' price={72000}/>
        <ProductCard link='.\src\assets\iphone 16.jpg' name='IPhone 16' price={120000}/>
        <ProductCard link='.\src\assets\ironbox.jpg' name='IronBox' price={2600}/>
        <ProductCard link='.\src\assets\kettle.jpg' name='Kettle' price={2600}/>
        <ProductCard link='.\src\assets\straightner.jpg' name='Straightner' price={1300}/>
        <ProductCard link='.\src\assets\washing machine.jpg' name='Washing Machine' price={53000}/>
        <ProductCard link='.\src\assets\microwaveoven.jpg' name='Microwave Oven' price={9150}/>
        {/* <ProductCard link='.\src\assets\hometheatre.jpg' name='Home Theatre' price={4299}/>   */}
    </div>
    <Link to='/Cart'><button >Move to cart</button></Link>
    </>
  )
}

export default Productpage
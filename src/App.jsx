import { useState } from 'react'
import './App.css'
import Hero from './Components/Banner/Hero'
import Carts from './Components/carts/Carts'
import Main from './Components/main/Main'
import NavBar from './Components/Navbar/NavBar'
import Body from './Components/main/Body/Body'
import Footer from './Components/footer/Footer'
const fetchData = fetch("jData.json")
  .then(res => res.json())



function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);
  // console.log(carts);
  

  return (
    <>
      {/* Navigation  */}
      <NavBar></NavBar>

      {/* Hero section */}
      <Hero></Hero>

    {/* main functionality and the cards */}
      <div className='lg:px-52 pt-7 lg:pt-30 space-y-7'>
        <div className="tabs tabs-box justify-center  bg-white p-2  space-x-3.5">
          <input type="radio" name="my_tabs_1" className="tab rounded-full text-2xl font-bold " aria-label="Products" defaultChecked onClick={() => setActiveTab("products")} />

          <input type="radio" name="my_tabs_1" className="tab rounded-full text-2xl font-bold" aria-label="Carts" onClick={() => setActiveTab("carts")} />


        </div>
        {activeTab==="products" && <Main fetchData={fetchData} carts={carts} setCarts={setCarts}></Main>}


        { activeTab==="carts" && <Carts carts={carts } setCarts={setCarts}></Carts>}
      </div>

      {/* Body */}
      <Body></Body>

      {/* Footer */}
      <Footer></Footer>

    </>
  )
}

export default App

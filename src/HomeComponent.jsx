import React from 'react'
import Navbar from "./components/Navbar";
import { Button } from 'primereact/button';
import GeneralInformation from "./components/GeneralInfo";
import PODetails from "./components/PODetails"
import OtherDetailsPage from "./components/OtherDetailsPage";
import "./HomeComponent.css";

export default function HomeComponent() {
    return (
        <div>
            <div className='Navbar'>
                <Navbar />
            </div>
            <div className='Body grid'>


                <div className='LeftBody col-2'>
                    <div style={{ display: "flex" }}>
                        <img alt="logo" src="src/assets/checked.png" height="40" className="mr-2 leftbodyIcon" />
                        <span className='LeftbodyContent'>Accounting</span>
                    </div>
                    <div className=" flex justify-content-center PurchaseBtn" style={{ color: "rgb(13, 13, 195)" }} >
                        <Button className='PurchaseBtn1' severity="info" >Purchase Order</Button>
                    </div>

                </div>


                <div className='CentreBody col-6'>
                    <div style={{ display: "flex" }}>
                        <p className='headerNav'>Accounting</p>
                        <img className='headerIcon' src='src\assets\right-arrow.png' alt='arrow' style={{ color: "blue" }} />
                        <p className='headerNav'>Purchase Order</p>
                        <img className='headerIcon' src='src\assets\right-arrow.png' alt='arrow' />
                        <p className='headerNav'>Edit</p>
                        <img className='' src='src\assets\kindpng_116323.png' alt='arrow' style={{ height: "22px", marginTop: "21px", marginRight: "20px" }} />
                        <p className='headerNav' style={{ color: "black" }}>PO-23004</p>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <GeneralInformation />
                    </div>
                    <PODetails />
                </div>
                <div className='RightBody col-3'>
                    <OtherDetailsPage />
                </div>

            </div>


        </div>
    )
}

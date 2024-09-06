import React from 'react'
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import "./Navbar.css";

function Navbar() {

    const start = <img alt="logo" src="src/assets/Mask group.png" height="40" className="mr-2 icon"></img>;
    const end = (
        <div className="flex align-items-center gap-2 faceIcon">
            <img alt="logo" src="src/assets/shopping-cart.png" height="40" className="mr-2" style={{ color: "white" }}></img>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div style={{ backgroundColor: "blue" }}>
            <div className="card" >
                <Menubar start={start} end={end} />
            </div>
        </div>
    )
}
export default Navbar
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { updateShipToAddress } from '../slices/appSlice';
import Order from './Order';

function PODetails() {

    const dispatch = useDispatch()


    const { address, vendor, shipTo } = useSelector(state => state.app)
    return (
        <Card title="PO Details " style={{ boxShadow: "inherit", border: "ridge" }}>
            <div style={{ textAlign: " end", marginTop: "-56px", marginBottom: "35px" }}>
                <ButtonGroup >
                    <Button label="Generate PO" style={{ backgroundColor: "white", color: "blue" }} />
                    <Button label="Upload PO" style={{ backgroundColor: "blue", color: "white" }} />
                </ButtonGroup>
            </div>
            <hr />
            <div className='grid' style={{ marginTop: "10px" }}>

                <div className='col-6'>
                    <Card title="Vendor " style={{ backgroundColor: "rgb(228,250,255)" }}>
                        <div className='grid'>
                            <div className='col-12 flex flex-column'>
                                <span>Company name</span>
                                <InputText value={vendor?.customerName} disabled />


                            </div>

                            <div className='col-12 flex flex-column'>
                                <span>Address</span>
                                <InputText value={vendor?.address} disabled />


                            </div>

                        </div>
                    </Card>
                </div>

                <div className='col-6'>
                    <Card title="Ship to" style={{ backgroundColor: "rgb(228,250,255)" }} >
                        <div style={{ textAlign: " end", marginTop: "-56px", marginBottom: "35px" }}>
                            <a href='' style={{ color: "blue", fontSize: "15px" }}>Update Information   </a>
                            <img src='src/assets/HyperlinkIcon.jpeg' alt='hyperlink' height={12} />
                        </div>
                        <div className='grid'>
                            <div className='col-12 flex flex-column'>
                                <span>Company name</span>
                                <InputText value={shipTo?.customerName} disabled />


                            </div>

                            <div className='col-12 flex flex-column'>
                                <span>Address</span>
                                <Dropdown value={shipTo?.address} onChange={(e) => { dispatch(updateShipToAddress(e?.value)) }} options={address} optionLabel="name"
                                    placeholder="Select a Address" className="w-full md:w-full" />


                            </div>

                        </div>
                    </Card>
                </div>

                <div className='col-12'>

                    <Order />

                </div>

            </div>


        </Card>
    )
}

export default PODetails
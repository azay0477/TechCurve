import { useSelector } from "react-redux"
import { Card } from 'primereact/card';

import { InputText } from 'primereact/inputtext';

function GeneralInformation() {
    const { purchaseOrderNumber, purchaseOrderDate, deliveryDate, status } = useSelector(state => state.app)
    return (
        <Card title="General Infromation" style={{ boxShadow: "inherit", border: "ridge" }}>
            <div className="grid">
                <div className="col-6 flex flex-column">
                    <span>Purchase order number</span>
                    <InputText value={purchaseOrderNumber} disabled />
                </div>
                <div className="col-6 flex flex-column">
                    <span>Purchase order date</span>
                    <InputText value={purchaseOrderDate} disabled />
                </div>
                <div className="col-6 flex flex-column">
                    <span>Delivery date</span>
                    <InputText value={deliveryDate} disabled />
                </div>
                <div className="col-6 flex flex-column">
                    <span>Status</span>
                    <InputText value={status} disabled />
                </div>

            </div>
        </Card>
    )
}

export default GeneralInformation
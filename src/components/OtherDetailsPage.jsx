import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from "primereact/card"


export default function OtherDetailsPage() {
    return (
        <>
            <Card title="OTHER DETAILS" style={{ width: "100vw", height: "100vw" }}>
                <TabView>
                    <TabPanel header="Vendor">
                        <h3>Vendor Contact Information :</h3>
                        <div style={{ display: "flex" }}>
                            <p>Name</p>
                            <p style={{ marginLeft: "240px" }}>Dell Technology</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>ID</p>
                            <p style={{ marginLeft: "270px" }}><a style={{ color: "blue" }} href="">#VEn654</a></p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Email</p>
                            <p style={{ marginLeft: "240px" }}>Troy1223@gmail.com</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Phone Number</p>
                            <p style={{ marginLeft: "175px" }}>8748258965</p>
                        </div>
                        <hr />
                        <h3>Billing Details :</h3>

                        <div style={{ display: "flex" }}>
                            <p>Street</p>
                            <p style={{ marginLeft: "245px" }}>1034 botsford lakes, <br /> Lillianafield 1318-0174</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Country</p>
                            <p style={{ marginLeft: "230px" }}>Mexico</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>state</p>
                            <p style={{ marginLeft: "250px" }}>botsford lakes</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>City</p>
                            <p style={{ marginLeft: "260px" }}>Lillianafield</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>ZIP/PIN code</p>
                            <p style={{ marginLeft: "190px" }}>1318-0174</p>
                        </div>
                    </TabPanel>

                    <TabPanel header="PR">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Quotation">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                    <TabPanel header="History">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </Card>

        </>
    )
}

import { TabView, TabPanel } from 'primereact/tabview';
import { useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Order() {

    const { purchaseInfo } = useSelector(state => state.app)


    return (
        <>
            <TabView>
                <TabPanel header="Purchase Information">
                    <DataTable value={purchaseInfo} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="itemCode" header="ITEMCODE"></Column>
                        <Column field="item" header="ITEM"></Column>
                        <Column field="quantity" header="QUANTITY"></Column>
                        <Column field="uom" header="UOM"></Column>
                        <Column field="price" header="PRICE"></Column>
                        <Column field="shippingMethod" header="SHIPPING METHOD"></Column>
                    </DataTable>
                </TabPanel>
                <TabPanel header="Attachement">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Terms & Conditions">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Additional Information">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </>

    )
}

export default Order
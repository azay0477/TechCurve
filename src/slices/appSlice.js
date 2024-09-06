import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
   
    purchaseOrderNumber : 2345863,
    purchaseOrderDate: '30/08/2024',
    deliveryDate: '05/09/2024',
    status:'Draft',
    address : [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ],
    vendor : {
        customerName : "Ajay",
        address : "Hyderabae, Telangana"
    },
    shipTo 
    : {
        customerName : "Poster",
        address : {}
    },
    purchaseInfo : [
        {itemCode : "Suit-195",item:"Suitcase", quantity : 1,uom:"Each",price : 12000,shippingMethod : "UPS"},
        {itemCode : "Suit-195",item:"Suitcase", quantity : 1,uom:"Each",price : 12000,shippingMethod : "UPS"},
        {itemCode : "Suit-195",item:"Suitcase", quantity : 1,uom:"Each",price : 12000,shippingMethod : "UPS"},
        {itemCode : "Suit-195",item:"Suitcase", quantity : 1,uom:"Each",price : 12000,shippingMethod : "UPS"},
        {itemCode : "Suit-195",item:"Suitcase", quantity : 1,uom:"Each",price : 12000,shippingMethod : "UPS"},
        {itemCode : "Suit-195",item:"Suitcase", quantity : 1,uom:"Each",price : 12000,shippingMethod : "UPS"},
    ]

  },
  reducers: {
    

    updateShipToAddress : (state,action) => {
        state.shipTo.address = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateShipToAddress } = appSlice.actions

export default appSlice.reducer
import { firebasedb } from "../firebase";

export const orderService = {
    getProducts
};

async function getProducts() { 
    try{
        const data = await firebasedb.collection('orders').doc().get();
        console.log("here", data)
    
        let orders = [];
        data.docs.forEach(item=>{
            orders = [...orders, item.data()];
        });
        console.log("orders", orders)
        return orders;

    } catch(error) {
        console.log("orders error", error)
    }
    
}
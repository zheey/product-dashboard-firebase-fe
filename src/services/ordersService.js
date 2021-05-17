import { firebasedb } from "../firebase";
import { userService } from "./userService";

export const orderService = {
    getProducts,
    editOrders
};

async function getProducts() { 
    try{
        const data = await firebasedb.collection('orders').get();
    
        let orders = [];
        data.docs && data.docs.forEach(item=>{
            orders = [...orders, {...item.data(), _id: item.id}];
        });
        return orders;

    } catch(error) {
        console.log("orders error", error)
    }
    
}

function editOrders(data, orderId) { 
    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(data)
    };
    
    let url = `http://localhost:3000/orders/${orderId}`;

    return userService.fetchFrom(url, requestOptions)
        .then(userService.handleResponse)
        .then(orders => {
            return orders;
        });
    
}
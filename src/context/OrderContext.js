import React, { useContext, useState } from 'react';
const OrderContext = React.createContext();

export const useOrder = () => {
    return useContext(OrderContext);
};

export const  OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const getOrderById = (orderId) => {
        return orders.find(order => order._id === orderId);
    };
   
    const value = {
        orders,
        setOrders,
        getOrderById
    };
    return(
        <OrderContext.Provider value={value}>
            { children }
        </OrderContext.Provider>
    )
};
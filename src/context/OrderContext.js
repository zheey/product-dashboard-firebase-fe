import React, { useContext, useState, useCallback } from "react";
import { orderService } from "../services/ordersService";
const OrderContext = React.createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getOrders = useCallback(() => {
    orderService.getProducts().then(
      orders => {
        setOrders(orders);
        setIsLoading(false);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  const getOrderById = orderId => {
    return orders.find(order => order._id === orderId);
  };

  const updateOrder = (data, orderId) => {
    const updatedOrders = orders.map(order => {
      if (order._id === orderId) {
        return {
          ...order,
          title: data.title,
          bookingDate: data.bookingDate
        };
      }
      return order;
    });
    setOrders(updatedOrders);
    return updatedOrders.find(order => order._id === orderId)
  };

  const value = {
    orders,
    setOrders,
    getOrderById,
    updateOrder,
    isLoading,
    getOrders
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

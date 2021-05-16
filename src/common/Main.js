import React from "react";
import {Switch, Route} from "react-router-dom";
import Orders from "../components/Orders";
import OrderDetails from "../components/OrderDetails";

const Main = ({onClickAction}) => {
    return(
        <>
            <Switch>
                <Route exact path={'/orders'} component={Orders}/>
                <Route exact path={'/orders/:id'} component={OrderDetails}/>
            </Switch>
        </>
    )
};

export default Main;
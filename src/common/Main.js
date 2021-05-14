import React from "react";
import {Switch, Route} from "react-router-dom";
import Products from "../components/Products";

const Main = ({onClickAction}) => {
    return(
        <>
            <Switch>
                <Route exact path={'/products'} component={Products}/>
            </Switch>
        </>
    )
};

export default Main;
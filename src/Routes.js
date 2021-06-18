import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Courses from "./Pages/Courses/Courses";
import LoginPage from "./Pages/LoginPage/LoginPage";
import OrderSummary from "./Pages/Order Summary/OrderSummary";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Courses} />
        <Route path="/ordersummary" exact component={OrderSummary} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

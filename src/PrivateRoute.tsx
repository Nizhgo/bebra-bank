import React from "react";
import {Navigate} from "react-router-dom";

interface IPrivateRoute {
    condition: boolean,
    element: JSX.Element;
    navigateTo?: string
}

function PrivateRoute(props: IPrivateRoute) {
    const {condition, element, navigateTo} = props;
    return condition ?  element : <Navigate to={navigateTo || '/'} />;
}

export default PrivateRoute;
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { moduleRoutesList } from "../../routes";

let routeList = moduleRoutesList();

const UserPrivateLayout = () => {
    const location = useLocation();
    const { pathname } = location;
    const path = ['/dashboard'];

    return (
        <>
            <Sidebar routes={routeList?.user}/>
            <Outlet />
            {!path?.includes(pathname) && "UserFooter"}
        </>
    )
}
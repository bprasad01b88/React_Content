import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { decodeQueryData, navigateWithParam } from "../../utils";
import AppLayout from "../App/index.layout";

const UserLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname, search} = location;
    const [ redirectPath, setRedirectPath] = useState("");

    useEffect(() => {
        if(redirectPath){
            if(search){
                let newParams = decodeQueryData(search);
                navigateWithParam(newParams, navigate, redirectPath);
            } else {
                navigate(redirectPath);
            }
            setRedirectPath("");
        }
    }, [redirectPath]);

    useEffect(() => {
        let pathPattern = /[ ]$/g;
        if(pathPattern.test(pathname)){
            navigate(pathname.replace(pathPattern, ""), { replace : true});
        }
    }, [pathname]);

    return (
        <AppLayout setRedirectPath={setRedirectPath}>
            <>
                <Outlet />
            </>
        </AppLayout>
    )
}

export default UserLayout;
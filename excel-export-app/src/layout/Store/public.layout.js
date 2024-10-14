/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppLayout from "../App/index.layout";

const UserPublicLayout = () => {
    const navigate = useNavigate();
    const [ redirectPath, setRedirectPath ] = useState("");
    
    useEffect(() => {
        if(redirectPath){
            navigate(redirectPath);
        }
    }, [redirectPath]);

    return (
        <>
            <AppLayout setRedirectPath={setRedirectPath}>
                <Outlet />  
            </AppLayout>
        </>
    )
}

export default UserPublicLayout;
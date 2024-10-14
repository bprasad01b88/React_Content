import { useLocation, generatePath, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { AuthDriver as authDriver } from "../../utils";
import { getCompletePathList } from "../../routes";
import routesMap from "../../routeControl/userRouteMap";

function AppLayout({ setRedirectPath, children }) {
    const location = useLocation();
    const params = useParams();

    function getGeneratePath(data) {
        try {
            return generatePath(data, params);
        } catch {
            console.log(error);
        }
    }

    const activeRoute = getCompletePathList().find((e) => {
        const routePath = getGeneratePath(e.key);
        const browserPath = location.pathname;
        return routePath === browserPath;
    });

    const isPrivate = activeRoute?.private;
    const isValid = authDriver(activeRoute, location.pathname);

    function checkValid() {
        if (!isValid) {
            let publicPath = "/";
            let privatePath = routesMap.DASHBOARD.path;

            if (isPrivate === true) {
                /** ******* If route type is private but not*****************
                * ******* able to prove their identity as valid entity*****
                * ********* so redirect it to public route******** */
               setRedirectPath(publicPath);
            } else if(isPrivate === false) {
                 /** ******* If route type is public but not*****************
                 * ******* able to prove their identity as valid entity*****
                 * ********* so redirect it to private route******** */
                setRedirectPath(privatePath);
            }
        }
    }

    useEffect(() => {
        checkValid();
    }, [location?.pathname]);

    return <>{isValid && children}</>;
}

export default AppLayout;
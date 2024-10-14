import routesMap from "../../../routeControl/userRouteMap";

export default function route() {
    return [
        {
            path : routesMap.LOGIN.path,
            name : "",
            key : routesMap.LOGIN.path,
            commonRoute : true,
            private : false,
            element : ""
        },
        {
            path : routesMap.SIGNUP.path,
            name : "",
            key : routesMap.SIGNUP.path,
            commonRoute : true,
            private : false,
            elemeent : ""
        }
    ]
}
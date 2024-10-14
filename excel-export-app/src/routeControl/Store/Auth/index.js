import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoutes = {

    LOGIN : {
        path : `${baseRoutes.userBaseRoutes}`
    },
    SIGNUP : {
        path : `${baseRoutes.userBaseRoutes}sign-up`
    }
}

export default accessRoutes;
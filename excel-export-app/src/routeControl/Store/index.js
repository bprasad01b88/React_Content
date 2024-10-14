import auth from "./Auth";
import aboutUs from './AboutUs';
import contact from './Contact';
import events from './Events';
import exportExcel from './ExportExcel';
import service from './Service';
import support from './Support';

const AccessControl = {
    ...auth,
    ...aboutUs,
    ...contact,
    ...events,
    ...exportExcel,
    ...service,
    ...support
}

export default AccessControl;
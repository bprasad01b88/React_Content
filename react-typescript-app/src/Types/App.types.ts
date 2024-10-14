export interface AppProps {
    title : string;
}

export interface Name {
    title : string;
    first : string;
    last : string;
}

export interface Login {
    uuid : string;
}

export interface User {
    name : Name;
    login : Login;
    email : string
}
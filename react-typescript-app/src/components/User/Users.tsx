import { FC } from "react";
import { Name } from "../../Types/App.types";

interface UserProp {
    name : Name;
    email : string;
}

const Users : FC<UserProp>= ({name, email}) => {
  return (
    <>
        <li>
            <div>{name?.title} {name?.first} {name?.last}</div>
            <div>{email}</div>
        </li>
    </>
  )
}

export default Users
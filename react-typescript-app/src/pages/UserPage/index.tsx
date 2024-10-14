import { FC, useState } from "react";
import { AppProps, User } from "../../Types/App.types";
import axios from "axios";
import Users from "../../components/User/Users";

// const UserPage = ({title} : { title : string}) => {
const UserPage : FC<AppProps> = ({title})=> {
  const [user, setUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.get('https://randomuser.me/api/?result=10');
      setUser(data?.results);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect(() => {
  //   getUsers();
  // }, [])

  const handleClick = () => {
    getUsers();
  }
  return (
    <>
    <h1>{title}</h1>
    <button onClick={handleClick}>Show Users</button>
    {isLoading && <p>Loading...</p>}
    <ul>
      {user?.map((item) => (
       <Users key={item?.login?.uuid} name={item?.name} email={item?.email}/>
      ))}
    </ul>
    </>
  )
}

export default UserPage
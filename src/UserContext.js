import { createContext, useState, useEffect, useContext } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(
      data.map(({ name, email, username, website, phone, id }) => {
        return { name, email, username, website, phone, id };
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
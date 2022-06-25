import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UsersList() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get(`https://cardgametestserver.azurewebsites.net/user`).then((res) => {
        const responseUsers = res.data;
        setUsers(responseUsers);
      });
    }, []);
  
  
    console.log(users); 

    return (
     <div>
      <h1 className="text-white text-2xl"> User List </h1>
      {users &&
        users.map((user) => {
          const { userId, username, password, email} = user;
          return (
            <div key={userId}>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-4 mb-4">
                <div className="flex flex-wrap justify-center mt-4">
                  <h1 className='text-gray-900 dark:text-white text-3xl'>{username}</h1>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-xl'>Email: {email}</h5>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-xl'>Password: {password}</h5>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-md'>Id: {userId}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    );
  }
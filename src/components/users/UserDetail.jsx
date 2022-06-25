import React, { useEffect, useState } from 'react'; 
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from "axios";

export default function UserDetail() {
    const { user } = useAuthContext()
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://cardgametestserver.azurewebsites.net/user/id/${user.uid}`).then((res) => {
          const data = res.data;
          setData(data);
        });
      }, []);
    
    
      console.log(data); 

    return (
       <>
            <div className="w-full py-8 px-8">
              <div className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-4 mb-4">
                <div className="flex flex-wrap justify-center mt-4">
                  <h1 className='text-gray-900 dark:text-white text-3xl'>{data.username}</h1>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-sm'>Email: {data.email}</h5>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-sm'>Password: {data.password}</h5>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-xs'>UserId: {data.userId}</h5>
                </div>
              </div>
            </div>
        </>
    )
}
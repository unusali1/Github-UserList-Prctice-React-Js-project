import React, { useEffect, useState } from 'react';


const UseEffectAPI = () => {


  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());


  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className='text-center bg-secondary text-white-50' >List of Github Users</h1>

      <div className='container-fluid mt-2 p-2 '>
        <div className='row '>
          {
            users.map((element)=>{
              const{avatar_url , login, id }=element;
              return(
                <div className="card col-10 col-md-4 mt-5 " key={id}  >
            <img src={avatar_url} className="card-img-top  " width='90' height='300' alt="Not Found Picture" />
            <div className="card-body">
              <h5 className="card-title">{login}</h5>
              
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Articles : 980</li>
              <li className="list-group-item">Followers: 38</li>
              <li className="list-group-item">Rating   : 8.9</li>
            </ul>
            
          </div>
              )
            })
          }


          


        </div>

      </div>




    </>
  );
};

export default UseEffectAPI;
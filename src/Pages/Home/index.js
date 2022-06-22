import React, { useState } from 'react';

import './style.css'

function Home(){
    const [username, setUsername] = useState('')



    const displayRepo = () => {}


    const handleSubmit = async (e) => {
        e.preventDefault();
      };
    
      const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
      };



    return (
        <>
         <form className="container" role="form" onSubmit={handleSubmit}>
          <label htmlFor="usernameSearch" >Github Username: </label>
          <input
            id="usernameSearch"
            role="username"
            type="text"
            className="userNameSearch"
            onChange={updateInput}
          />
          <input className="button" type="submit" value="Search" onClick={displayRepo} />
        </form>
        </>


    )


}

export default Home
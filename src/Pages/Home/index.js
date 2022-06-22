import React, { useState } from 'react';

function Home(){
    const [username, setUsername] = useState('')




    return (
        <>
         <form role="form">
          <label htmlFor="usernameSearch">Github Username: </label>
          <input
            role="username"
            type="text"
          />
          <input className="button" type="submit" value="Search"  />
        </form>
        
        
        </>


    )


}

export default Home
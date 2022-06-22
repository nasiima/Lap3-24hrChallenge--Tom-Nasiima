import React, { useState, useEffect } from 'react';

import axios from "axios";

import './style.css'
// import Barebonegithublogo from '../../../public';

function Home(){
    const [repos, setRepos] = useState([{ }]);
    const [username, setUsername] = useState("");
    const [showRepo, setshowRepo] = useState(false);
    
    async function fetchData() {
        try {
            
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(data);
            setRepos(data);
        } catch (err) {
            console.warn(err.message);
            alert("The username does not exsist !");
        }
    }
    

    useEffect(() => {
        fetchData()
    }, [])
    

    const handleSubmit = e => {
        e.preventDefault()
        fetchData()
        setUsername('')
    }
    
    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };
    
    
    const getData = () => setshowRepo(true);

    return (
        <>
        <img src="Barebonegithublogo.png" alt=""/>
        <form className="container" role="form" onSubmit={handleSubmit}>
          <label htmlFor="usernameSearch" >Github Username: </label>
          <input
            id="usernameSearch"
            role="username"
            type="text"
            className="userNameSearch"
            onChange={updateInput}
          />
          <input className="button" type="submit" value="Search" onClick={getData} />
        </form>
        </>


    )


}

export default Home
import React, { useState, useEffect } from 'react';
import { RepoNames } from "../../Components";

import axios from "axios";

import './style.css'

function Home(){
    const [repos, setRepos] = useState([{ }]);
    const [username, setUsername] = useState("");
    const [showRepo, setshowRepo] = useState(false);
    
    async function fetchData() {
        try {
            
            const git = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(git.data);
            setRepos(git.data);
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
        <img className="logo" src="Barebonegithublogo.png" alt="strange GitHub logo"/>
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

        {setshowRepo ? <RepoNames user={username} results={repos} /> : null}
        </>
        


    )


}

export default Home
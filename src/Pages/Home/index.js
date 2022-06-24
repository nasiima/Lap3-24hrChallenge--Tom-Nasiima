import React, { useState, useEffect } from 'react';
import { RepoNames, RepoData } from "../../Components";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

import './style.css'
import '../../Components/Title/Title.css'

function Home(){
    const [repos, setRepos] = useState([{ }]);
    const [username, setUsername] = useState("");
    const [showRepo, setshowRepo] = useState(false);
    const [openIssues, setopenIssues] = useState(0);
    let navigate = useNavigate();
    
    // const incrementCount = () => {
        //     // Update state with incremented value
        //     setopenIssues(openIssues + 1);
        //   };                
        
        async function fetchData() {
            try {
                
                let issueCounter = 0
                let folkCounter = 0
                let sizeCounter = 0
                let watchCounter = 0
                let isMainCounter = 0
                let reposCounter = 0
            
            const git = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(git.data);
            setRepos(git.data);

            reposCounter = git.data.length

            for (let index = 0; index < git.data.length; index++) {
                
                const issues = git.data[index].open_issues;
                const folks = git.data[index].folk_counts;
                const sizes = git.data[index].size;
                const watchers = git.data[index].watchers_count;
                const isMain = (git.data[index].default_branch === "main") ? 1 : 0; 
                
                

                issueCounter +=issues;
                folkCounter += folks
                sizeCounter += sizes
                watchCounter += watchers
                isMainCounter += isMain
            }

            console.log("TOTAL ISSUES",issueCounter)
            console.log("TOTAL FOLKS",folkCounter)
            console.log("TOTAL PUBLIC REPOS",reposCounter);
            console.log("TOTAL SIZE (kb)",sizeCounter);
            console.log("TOTAL WATCHERS",watchCounter);
            console.log("TOTAL 'main' BRANCHS",isMainCounter);

            navigate("/repolist");
        
            // navigate("/repolist",{issueCounter} );

            // const totalData = {issueCounter,folkCounter,reposCounter,sizeCounter,watchCounter,isMainCounter}
            // console.log(totalData)
            // navigate("/repolist",{totalData} );

                

        } catch (err) {
            console.warn(err.message);
            alert("The username does not exsist !");
        }
    }
    

    useEffect(() => {
        fetchData()
    }, [])
    

    const histroy = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        fetchData()
        setUsername('')
        histroy.push("/Repolist")
    }


  
    
    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };
    
    
    const getData = () => setshowRepo(true);

    return (
        <>
        <div className="homePage container">
            <form className="container" role="form" onSubmit={handleSubmit}>
            <img className="logo" src="Barebonegithublogo.png" alt="strange GitHub logo"/>
            <p>Bare-Bones GitHub</p>
            <label htmlFor="usernameSearch"></label>
            <input
            placeholder="GitHub Username"
                id="usernameSearch"
                role="username"
                type="text"
                className="userNameSearch"
                onChange={updateInput}
            />
            <input className="button" type="submit" value="Search" onClick={getData} />
            {setshowRepo ? <RepoNames user={username} results={repos} /> : null}
        
            </form>
        </div>
        </>
        


    )


}

export default Home
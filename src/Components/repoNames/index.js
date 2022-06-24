import Title from '../Title/Title';
import './style.css'

const RepoNames = ({ result, results }) => {
   

  
 
  const showRepoNames = results.map((result) => {
    const link = `https://www.github.com/${result.full_name}`;

    return (
      <>

          <div className="result" key={result.name}>
            <div className='each'> 

            <h2>{result.name}</h2>
            <h3> 🌟 stargazers: {result.stargazers_count}</h3>
              <h3> 🍴 Forks:  {result.forks_count}</h3>
              <h3> 🎫 Issues: {result.open_issues}</h3>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <ul>{showRepoNames}</ul>
      </div>
    </>
  );


};

export default RepoNames;
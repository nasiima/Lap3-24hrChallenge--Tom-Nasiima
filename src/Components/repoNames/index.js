import './style.css'

const RepoNames = ({ result, results }) => {
   

  
 
  const showRepoNames = results.map((result) => {
    const link = `https://www.github.com/${result.full_name}`;

    return (
      <>
          <div className="result" key={result.name}>
            <h2>{result.name}</h2>
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
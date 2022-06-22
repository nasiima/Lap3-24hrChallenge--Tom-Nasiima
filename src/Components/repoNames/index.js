import './style.css'

const RepoNames = ({ user, results }) => {
   

  
 
  const showRepoNames = results.map((eachRepo) => {
    const link = `https://www.github.com/${eachRepo.full_name}`;

    return (
      <>
          <div className="eachRepo" key={eachRepo.name}>
            <h2>{eachRepo.name}</h2>
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
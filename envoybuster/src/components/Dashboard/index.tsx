import * as React from 'react';
// import "../../styles/_dashboard.scss";

const Dashboard = ({ movie }: any) => {

  React.useEffect(() => {
    // console.log(movie);
  }, [])

  return(
    <div className="Container">
      <h2>{movie.name}</h2>
    </div>
  );
}

export default Dashboard;
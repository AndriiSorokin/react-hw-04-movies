import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { openActorMovie } from '../fetch/fetch';
const Actors = () => {
  const [actors, setActor] = useState([]);
  const location = useLocation();
  console.log(location);
  const actorId = location.state.id;

  useEffect(() => {
    openActorMovie(actorId).then(responseActor => setActor(responseActor.data.cast));
  }, []);
  console.log(actors);

  return (
    <div>
      <h2>Actors</h2>
    </div>
  );
};

export default Actors;

// adult: false;
// cast_id: 9;
// character: 'Raya (voice)';
// credit_id: '5f47db6f813cb600358c77aa';
// gender: 1;
// id: 1663195;
// known_for_department: 'Acting';
// name: 'Kelly Marie Tran';
// order: 0;
// original_name: 'Kelly Marie Tran';
// popularity: 11.182;
// profile_path: '/v2daUrk7hZryH6vtCWK9ESf6gAG.jpg';

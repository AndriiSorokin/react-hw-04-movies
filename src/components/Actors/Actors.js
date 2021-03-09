import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { openActorMovie } from '../fetch/fetch';
import style from './Actors.module.css';
const Actors = ({ id }) => {
  const [actors, setActor] = useState([]);
  const location = useLocation();
  console.log(location);
  console.log(id);

  useEffect(() => {
    openActorMovie(id).then(responseActor => setActor(responseActor.data.cast));
  }, []);
  console.log(actors);
  return (
    <>
      <h2>Actors</h2>
      <ul className={style.actorList}>
        {actors.map(actor => (
          <li key={actor.id} className={style.actorItem}>
            <p>{actor.name}</p>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : `https://freshorthoclub.by/sites/default/files/lectors/fbpic_0.jpg`
              }
              alt="img"
              width="200"
              height="200"
            />
          </li>
        ))}
      </ul>
    </>
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

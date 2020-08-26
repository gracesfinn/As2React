import { useEffect, useState } from "react";
import {getActor} from '../api/tmdb-api'

const useActor = id => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getActor(id).then(person => {
      setPerson(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default useActor
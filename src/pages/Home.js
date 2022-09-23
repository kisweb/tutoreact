// import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import {useState, useEffect} from 'react';

const baseURL = 'http://127.0.0.1:8000/membres/1/';

export const Home = () => {

  const [post, setPost] = useState(null);

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);
  if (!post) return <div>Pas de données</div>;

  return (
    <div>
      <h1>
        {post.nomComplet}
      </h1>
      <p>
        {post.datenaissance} à {post.lieunaissance}
      </p>
    </div>
  );
};

import React, { useEffect, useState } from "react";
//importas a la instancia de axios y no axios puro
import axiosInstance from "../services/axiosInstance";
//import axios from "axios";

const AxiosPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // solo pasas la ruta relativa
        const response = await axiosInstance.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Listado de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosPosts;

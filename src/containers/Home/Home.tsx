import { useEffect, useState } from "react";
import axiosApi from "../../axios-api";
import { useNavigate } from "react-router-dom";

const Home=()=>{

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState({})

    const getPosts = async () => {
        
        setLoading(true);
    
        try {
          const response = await axiosApi.get('/posts.json');
          console.log(response.data);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(()=>{
        getPosts(); 
      },[])

    return(
        <>
            Home
        </>
    )
}

export default Home
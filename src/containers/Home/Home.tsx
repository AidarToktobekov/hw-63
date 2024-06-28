import { ChangeEvent, useEffect, useState } from "react";
import axiosApi from "../../axios-api";
import GetPost from "../../components/Posts/Post.tsx";
import { Post } from "../../types.ts";
import EditPost from "../../components/Posts/EditPost.tsx";

const Home=()=>{
    
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        
        setLoading(true);
        
        try {
            const response = await axiosApi.get('/posts.json');
            const postCopy = [];
            for (let key in response.data) {
                const onePost = {id: key, title: response.data[key].title,date: response.data[key].date,body: response.data[key].body,};
                postCopy.push(onePost);
            }
            setPosts(postCopy);
            
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        getPosts(); 
    },[])
    
    let callPosts = (
        <>
            <h3 className="text-center">Постов нет!</h3>
        </>
    )
    const [fullPost, setFullPost] = useState(
        <div></div>
    );
    
    const getFullPost = (post:Post)=>{
        
        const messageDate = new Date(post.date);
        const lengthDate=(date:number)=>{
            if (String(date).length === 1) {
                return('0' + date)
            }else{
                return(date)
            }
        }
        
        const deletePost = async(key:string)=>{
            setLoading(true);
            
            try {
                const responseDelete = await axiosApi.delete('/posts/' + key + '.json');
                const response = await axiosApi.get('/posts.json');
                const postCopy = [];
                for (let key in response.data) {
                    const onePost = {id: key, title: response.data[key].title,date: response.data[key].date,body: response.data[key].body,};
                    postCopy.push(onePost);         
                }
                setPosts(postCopy);
            } finally {
                setFullPost(<div></div>)
                setLoading(false);
            }
        }
        
        const editPost = (key:string)=>{
            
        const editPost=async()=>{
            try {
                const response = await axiosApi.get('/posts.json');
                console.log(response.data);
                
                const postCopy = [];
                for (let key in response.data) {
                    const onePost = {id: key, title: response.data[key].title,date: response.data[key].date,body: response.data[key].body,};
                    postCopy.push(onePost);         
                }
                setPosts(postCopy)
        } finally {
            setFullPost(<div></div>)
            setLoading(false);
        }
        } 
        
        setFullPost(
            <>
                    <EditPost func={editPost} key={key} id={key}></EditPost>
                </>
            )
        }
        setFullPost(
            <>
                <div className="bg-dark text-light rounded-3 p-3" style={{width: '35%'}}>
                    <span>
                        Create on: {lengthDate(messageDate.getDate())}.{lengthDate(messageDate.getMonth() + 1)}.{String(messageDate.getFullYear())}  {lengthDate(messageDate.getHours())}:{lengthDate(messageDate.getMinutes())}
                    </span>
                    <h5 className="modal-title">{post.title}</h5>
                    <div className="">
                        <p>Body: {post.body}</p>
                    </div>
                    <button className="btn btn-danger m-2" onClick={()=>(deletePost(post.id))}>Delete</button>
                    <button className="btn btn-primary m-2" onClick={()=>(editPost(post.id ))}>Edit</button>
                    <button className="btn btn-light m-2">Exit</button>
                </div>
            </>
        )
    }
    
    if (posts.length > 0) {
        callPosts = (
            <>
                <div className="list-group"  style={{width: '65%'}}>
                    {posts.map((post)=>{
                        return(
                            <div key={post.id} className="list-group-item bg-dark text-light">
                                <GetPost key={post.id} id={post.id} date={post.date} title={post.title} body={post.body}/>
                                <button className="btn btn-light" onClick={()=>{getFullPost(post)}}>Read more</button>
                            </div>
                        )
                    })} 
                </div>
            </>
        )
    }
    
    return(
        <>
            <div className="container mt-5 d-flex justify-content-center" style={{marginBottom: '100px'}}>
                {callPosts}
                {fullPost}  
            </div>
        </>
    )
}

export default Home
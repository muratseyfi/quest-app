import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Home.scss";
import PostForm from "../Post/PostForm";

const Home = () => {

    const [error, setError, ] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    const refreshPosts = () => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result)
            },
            (error) => {
                console.log(error);
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    useEffect(() => {
        refreshPosts();
    }, [postList])

    if(error) {
        return <div>Error !!!</div>;
    }else if(!isLoaded){
        return <div>Loading...</div>
    }else {
        return(

            <div className="container">

                <PostForm userName={"user1"} userId={1} 
                            refreshPosts = {refreshPosts}
                />

                { postList.map(post => (

                    <Post likes = {post.postLikes} postId = {post.id} userName={post.userName} userId={post.userId} 
                            title={post.title} text={post.text}
                    ></Post>
                    
                ))}

            </div>
            
                
         
        );
    }

}

export default Home;
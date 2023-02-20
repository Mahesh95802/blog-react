import { useEffect, useState } from "react";
// import posts from "../../assets/index.json";
import Post from "./post";

import "./posts.style.css";

interface CardProp {
    image: string;
    date: string;
    readingTime: string;
    title: string;
    description: string;
    claps: number;
    liked: boolean;
}

const Posts = () => {
    let [posts, setPosts] = useState<CardProp[]>([])
    useEffect(() => {
        (async () => {
            const response = await (await fetch("http://localhost:4002/")).json();
            // console.log("INSIDE", posts);
            setPosts(response);
        })();
        // console.log("OUTSIDE", posts);
    }, []);
    // console.log("OUTSIDE OUTSIDE", posts);
    return (
        <div className="posts basic-padding">
            {posts.map((post: CardProp) => {
                return <Post {...post}/>;
            })
            }
        </div>  
    )
}
    
export default Posts;
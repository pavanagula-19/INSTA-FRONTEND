import React from "react";
import Header from "./Header";
import Post from "./Post";

const Rapper = () =>{

    // const userPost = userInfo.map(post => <Post key={post.name} data={post}/>)

    return(
        <>
            <Header/>
            <div className='parent-container'>
                <div className="container">
                    {<Post/>}
                </div>
            </div>
        </>
    )
}
export default Rapper
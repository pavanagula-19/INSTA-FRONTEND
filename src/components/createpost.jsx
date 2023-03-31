import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Createpost.css'

function CreatePost() {
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [loading,setLoading] =useState(false)
    const navigate=useNavigate()

    const submitPost = (e) => {
        e.preventDefault()
        if (Image) {
             fetch('https://instacloneserver-o66x.onrender.com/api/v1/posts',
             {method:"post",headers: {
                "Content-Type": "application/json"
            },body:JSON.stringify({image:image,author:author,location:location,description:description})})
             .then(data =>console.log(data))
             .catch(err=>console.log(err))
             navigate('/posts')
            //(title, Image, Description)
            //     .then(res => {
            //         console.log(res)
                  
            //     }).catch(err => console.log(err))
        }
        else{
            alert("please select image..")
        }
    }
    const imageHandler = (img) => {
        setLoading(true)
        const formdata = new FormData()
        formdata.append("file", img)
        formdata.append("upload_preset", "instagram")
        axios.post("https://api.cloudinary.com/v1_1/dlzydctta/upload", formdata)
            .then(res => {
                setImage(res.data.url)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    

    return (
        <div className="inputs">
            <form>
                <div>
                    <input type="file" placeholder="No Choosen File" onChange={(e) => imageHandler(e.target.files[0])} />
                </div>
                <div>
                    <input type="text" placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button onClick={submitPost}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost
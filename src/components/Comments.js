import React, { useState } from 'react'

function Comments() {

    const [Comments,setComments] = useState([
         {id:1,text:"Nice"},
    ])


    const [newComment, setNewComment] = useState("")

    const handleChange = (e) =>{
        setNewComment(e.target.value)
    }

    const addComment = () =>{
        setComments(
            [...Comments,{id:Comments.length+1,text:newComment}]
        )
        setNewComment("")
    }

    return (

        <div>

            {
                Comments.map((commentsObj)=>{
                    const {id,text} = commentsObj
                    return (
                        <ul key={id}>
                            
                            <li> <h3>{text}</h3></li>
                           
                           
                            
                        </ul>
                    )
                })

            }

            <input
                type="text"
                name="comment"
                placeholder="enter comment"
                onChange = {handleChange}


            />

            <button onClick={addComment}>Add Comment</button>
            
        </div>
    )
}

export default Comments

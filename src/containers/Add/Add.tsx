import { ChangeEvent, useEffect, useState } from "react";
import axiosApi from "../../axios-api";

const Add=()=>{

    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    const titleValue=(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
    }
    const messageValue=(event: ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(event.target.value)
    }


    const addPost = async (event: React.FormEvent) => {
        event.preventDefault();
        if (title.trim() === '' || message.trim() === '' || title.trim() === null || message.trim() === null) {
            alert('Заполните поля ниже!')
        }
        else{
            setLoading(true);

            const post = {
                title: title,
                date: new Date(),
                body: message,
            }

            try {
                const response = await axiosApi.post('/posts.json', post);
                
        } finally {
              setLoading(false);
        }     
        }
    };

    return(
        <>
            <div className="container">
                <form onSubmit={addPost}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" onChange={titleValue} className="form-control" id="exampleFormControlInput1" placeholder="text"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" onChange={messageValue} id="exampleFormControlTextarea1"></textarea>
                    </div>
                    <button className="btn btn-dark" type="submit">Add</button>
                </form>
            </div>
        </>
    )
}

export default Add
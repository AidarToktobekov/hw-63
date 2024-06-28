import { ChangeEvent, Children, PropsWithChildren, useState } from "react";
import axiosApi from "../../axios-api";

interface Props{
    id: string;
    func: ()=>void;
}

const EditPost:React.FC<Props> = ({id, func})=>{
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const titleValue=(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value);
    }
    const messageValue=(event: ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(event.target.value);
    }

    const editResponsePost = async () => {
        if (title.trim() === '' || message.trim() === '' || title.trim() === null || message.trim() === null) {
            console.log(title, message);
            alert('Заполните поля ниже!')
        }
        else{

            const post = {
                title: title,
                date: new Date(),
                body: message,
            }

            try {
                const responsePut = await axiosApi.put('/posts/' + id + '.json', post);
                const response = await axiosApi.get('/posts.json');
                console.log(response.data);
                func()

        } finally {
            
        }     
        }
    };


    return(
        <>
            <div className="bg-dark text-light rounded-3 p-3" style={{width: '35%'}}>
                <h5 className="">Edit post</h5>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" onChange={titleValue} className="form-control" id="exampleFormControlInput1" placeholder="text"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" onChange={messageValue} id="exampleFormControlTextarea1"></textarea>
                    </div>
                    <button className="btn btn-dark" type="submit" onClick={editResponsePost}>Add</button>
                    <button className="btn btn-light m-2">Exit</button>
            </div>
        </>
    )
}

export default EditPost
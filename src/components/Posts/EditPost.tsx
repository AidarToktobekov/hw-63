import { ChangeEvent, useState } from "react";
import axiosApi from "../../axios-api";

interface Props{
    id: string;
    updateResponse: ()=>void;
    exit: ()=>void;
}

const EditPost:React.FC<Props> = ({id, updateResponse, exit})=>{

    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    let preloader = null;

    if (loading === true) {
      preloader = (
        <>
            <div id="preloader">
              <div className="loader"></div>
            </div>
        </>
      )
    }
  

    const titleValue=(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value);
    }
    const messageValue=(event: ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(event.target.value);
    }

    const editResponsePost = async () => {
        if (title.trim() === '' || message.trim() === '' || title.trim() === null || message.trim() === null) {
            alert('Заполните поля ниже!');
        }
        else{
            setLoading(true);
            const post = {
                title: title,
                date: new Date(),
                body: message,
            }

            try {
                await axiosApi.put('/posts/' + id + '.json', post);
                updateResponse();

        } finally {
            setLoading(false);
        }     
        }
    };


    return(
        <>
        {preloader}
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
                    <button className="btn btn-light m-2" onClick={exit}>Exit</button>
            </div>
        </>
    )
}

export default EditPost
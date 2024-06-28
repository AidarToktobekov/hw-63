import PostById from "../../containers/Post/PostById";
import { Post } from "../../types";
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'

const GetPost:React.FC<Post> = ({id, title, body, date})=>{

    const messageDate = new Date(date);
    const lengthDate=(date:number)=>{
        if (String(date).length === 1) {
            return('0' + date)
        }else{
            return(date)
        }
    }

    return(
        <>
           
                <span>
                    Create on: {lengthDate(messageDate.getDate())}.{lengthDate(messageDate.getMonth() + 1)}.{String(messageDate.getFullYear())}  {lengthDate(messageDate.getHours())}:{lengthDate(messageDate.getMinutes())}
                </span>
                <h4>{title}</h4>
        </>
    )
}

export default GetPost
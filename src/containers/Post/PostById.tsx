import { Route } from 'react-router-dom';
import { Post } from '../../types.ts'

const PostById:React.FC<Post> =({id, title , body, date})=>{

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
        <div className="container">
            <div className="list-group-item bg-dark text-light">
                    <span>
                        Create on: {lengthDate(messageDate.getDate())}.{lengthDate(messageDate.getMonth() + 1)}.{String(messageDate.getFullYear())}  {lengthDate(messageDate.getHours())}:{lengthDate(messageDate.getMinutes())}
                    </span>
                    <h4>{title}</h4>
                    <p>{body}</p>
            </div>
        </div>

        </>
    )
}

export default PostById
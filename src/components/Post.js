import { Link } from 'react-router-dom'


export default function Post(props) {
    console.log(props)
    return (
        <div className="post">
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <p>{props.post.dateCreated?.toDate().toString()}</p> {/* Optional Chaining! */}
            <p>Posted By: {props.post.userName}</p>
            {
                (props.hideLink) ?
                <></> :
                <Link to={ `/post/${props.post.uid}/${props.post.id}` }>Read More</Link>
            }
        </div>
    )
}
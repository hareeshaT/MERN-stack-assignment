import './index.css'

const PostItems = props =>{
    const {postData} = props
    return(
        <div className="postItem-container">
            <div className="title-body">
                <p><span className="postheaders">Title: </span>{postData.title}</p>
                <p><span className="postheaders">Body: </span>{postData.body}</p>
            </div>
        </div> 
    )
}

export default PostItems
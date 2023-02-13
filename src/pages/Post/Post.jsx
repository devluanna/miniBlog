import React from "react";
import { Title, TagsContainer, PostDetail, ThisPost, BodyPost, CreatedBy} from "./styles";

// hooks
import {useParams} from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
const {id} = useParams();
const {document: post, loading} = useFetchDocument("posts", id)


    return (
<PostDetail>
{loading && <p>Loading post...</p>}
{post && (
    <>
    <Title>{post.title}</Title>
    <img src={post.image} alt={post.title}/>
    <CreatedBy><span>Created by:</span> {post.createdBy}</CreatedBy>
    <BodyPost>{post.body}</BodyPost>

    <ThisPost>this post deals with:</ThisPost>
    <TagsContainer>
            {post.tagsArray.map((tag) => (
            <p key = {tag}>
                <span>#</span>
                {tag}
                </p>
            ))}
            </TagsContainer>

    
    
    
    </>

)}

</PostDetail>
        
)
};

export default Post;
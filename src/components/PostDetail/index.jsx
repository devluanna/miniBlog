import React from "react";
import { Title, ContainerTitle, TagsContainer, CreatedBy, NavLink, PostDetails, DivBtn} from "./styles";
import ButtonDefault from "../../components/Buttons";

const PostDetail = ({post}) => {
    return (
        <>
     <PostDetails>
        <img src={post.image} alt={post.title}/>
        
        <ContainerTitle>
            <Title>
            {post.title}
            </Title>
            </ContainerTitle>
        <CreatedBy>{post.createdBy}</CreatedBy>

        <TagsContainer>
            {post.tagsArray.map((tag) => (
            <p key = {tag}>
                <span>#</span>
                {tag}
                </p>
            ))}
            </TagsContainer>

            <DivBtn>
          
            <NavLink to={`/posts/${post.id}`}>
           <ButtonDefault 
           type={"learn"} 
           name={"read the post"}/>
           </NavLink>
          
           </DivBtn>
          
           </PostDetails>
            </>
    )
}

export default PostDetail;
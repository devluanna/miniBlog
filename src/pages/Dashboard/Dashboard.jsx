import React from "react";

//styles
import { TitlePage, NavLink, Title, Button, HeaderPost, DivBtn, PostRow, NoPosts, DashBoard } from "./styles";

//components
import ButtonDefault from "../../components/Buttons";

//hooks
import {useAuthValue} from "../../context/AuthContext";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument"

const Dashboard = () => {

    const {user} = useAuthValue();
    const uid = user.uid;
    
    const {documents: posts, loading} = useFetchDocuments
    ("posts", null, uid);

    const {deleteDocument} = useDeleteDocument("posts");

    if(loading) {
        return <p>Loading...</p>;
    }


    return (
<>
<DashBoard>
       <TitlePage>Dashboard</TitlePage>
       <p>Manage your posts</p>

       {posts && posts.length ===0 ? (
        <>
        <NoPosts>
        <p>No posts were found.</p>

         <NavLink to="/posts/create">
           <ButtonDefault 
           type={"outline"} 
           name={"Create first post!"}/>
           </NavLink>
           </NoPosts>
        </>
        
       ) : (
        <>
        <HeaderPost>
            <span>Title</span>
            <span>Action</span>
         </HeaderPost>

        {posts && posts.map((post) =>
        <PostRow key={post.id}>
        
        <Title>{post.title}</Title>

        
        <DivBtn>
           <NavLink to={`/posts/${post.id}`}>
           <ButtonDefault 
           type={"learn"} 
           name={"See"}/>
           </NavLink>
        
           <NavLink to={`/posts/edit/${post.id}`}>
           <ButtonDefault 
           type={"learn"} 
           name={"Edit"}/>
           </NavLink>
        
           
           <Button
           onClick={() => deleteDocument(post.id)}>
            Delet</Button>
           
        </DivBtn>

        
        
        </PostRow> 
        
)} 



</>
       )}
       </DashBoard>
</>
    );
};

export default Dashboard;
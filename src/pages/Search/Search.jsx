import React from "react";
import { TitlePage, NavLink, SSContainer } from "./styles";
import ButtonDefault from "../../components/Buttons";

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";


// components
import PostDetail from "../../components/PostDetail";

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents:posts} = useFetchDocuments("posts", search);

    return (
<>
<SSContainer>

    
<TitlePage>Search</TitlePage>


{posts && posts.length === 0 && (
    <>
            
        <p>No posts were found.</p>
        <center>
        <NavLink to="/">
           <ButtonDefault 
           type={"outline"} 
           name={"back"}/>
           </NavLink>
           </center>
            </>
            )}


{posts && posts.map((post) => <PostDetail
            key={post.id}
            post={post}/>)}
        
        
        </SSContainer>
        </>
        
)
};

export default Search;
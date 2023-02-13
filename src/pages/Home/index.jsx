//styles

import { TitlePage, DivBtn, NavLink, NoPosts, Span } from "./styles";
import styles from "./Home.module.css";

//components
import ButtonDefault from "../../components/Buttons";
import PostDetail from "../../components/PostDetail";


//hooks
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";


const Home = () => {
    const [query, setQuery] = useState("");

    const {documents: posts, loading} = useFetchDocuments("posts");

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            return navigate(`/search?q=${query}`);
        }
    };

    return (
        <>
        <div className={styles.home}>
        <TitlePage>See our most recent posts.</TitlePage>
        
        <form onSubmit={handleSubmit} className={styles.search_form}>
            <input type="text"
            placeholder="Search by tags."
            onChange={(e)=> setQuery(e.target.value)
            } />
            
            <DivBtn>
            <ButtonDefault type={"dark"} name={"Search"} />
            </DivBtn>
            
        </form>

           {loading && <p>Carregando...</p>}
            {posts && posts.map((post) => <PostDetail
            key={post.id}
            post={post}/>)}

            {posts && posts.length === 0 && (
                <NoPosts>
                    <Span>No posts were found.</Span>
                    <center>
            <NavLink to="/posts/create">
           <ButtonDefault 
           type={"outline"} 
           name={"Create your post...."}/>
           </NavLink>
           </center>
                    </NoPosts>
            )}
          
           </div>
        </>
        
    );
};

export default Home;
import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import {useInsertDocument} from "../../hooks/useInsertDocument"
import { useNavigate } from "react-router-dom";

//components
import ButtonDefault from "../../components/Buttons"

// styles
import { Containers, TitlePage, Subtitle, Title, DivBtn } from "./styles";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [ formError, setFormError] = useState("");

    const {user} = useAuthValue();

    const {insertDocument, response} = useInsertDocument("posts");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError("")

        try {
            new URL(image)
            } catch (error) {
                setFormError("The image needs to be in URL.");
            }

    const tagsArray = tags.split(",").map((tag) => 
    tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
        setFormError("Please fill in all fields.")
    }

    if (formError) return;

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });
    
        navigate("/");
    };

    return (
        <>
        <Containers>
       <TitlePage>Create your post</TitlePage>
       <Subtitle>Write about what you want and share.</Subtitle>

       <form onSubmit={handleSubmit}>
        <label>
            <Title>Title:</Title>
        <input type="text"
                name="title"
                required
                placeholder="Choose a good title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
        </label>

        <label>
            <Title>Image url:</Title>
        <input type="text"
                name="image"
                required
                placeholder="Insert an image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
        </label>

        <label>
            <Title>Content:</Title>
        <textarea
                name="body"
                required
                placeholder="Enter post content"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
        </label>

        <label>
            <Title>Tags:</Title>
        <input type="text"
                name="tags"
                required
                placeholder="enter the tags separated by commas"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
                />
        </label>

   
        <DivBtn>
             <center>
            {!response.loading && 
            <ButtonDefault type={"dark"} name={"Post"}/>}
            {response.loading && (
            <ButtonDefault type={"confirm"} name={"Sharing.."}
            disabled/>
            )}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
            </center>
            </DivBtn>
       </form>
       </Containers>
        </>
    );
};

export default CreatePost;
//hooks

import { useState, useEffect } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import {useFetchDocument} from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

//components
import ButtonDefault from "../../components/Buttons"

//styles
import { Containers, TitlePage, Subtitle, Title, DivBtn, PreviewImg } from "./styles";

const EditPost = () => {

    const {id} = useParams();
    const {document:post} = useFetchDocument("posts", id);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [ formError, setFormError] = useState("");

    useEffect(() => {
    
        if(post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(",");

            setTags(textTags);
        }
    }, [post]);

    const {user} = useAuthValue();

    const {updateDocument, response} = useUpdateDocument("posts");

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

    const data = {
        title,
        image,
        body,
        tagsArray,
        uid: user.uid,
        createdBy: user.displayName,
    };
        updateDocument(id, data);
    
        navigate("/dashboard");
    };

    return (
        <>
        <Containers>
            {post && (
                <>
       <TitlePage>Edit your post: {post.title}</TitlePage>
       <Subtitle>Change post data.</Subtitle>

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

        <PreviewImg>
        <p>Current image preview:</p>
        <img src={post.image}
        alt={post.title}/>
        </PreviewImg>



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
            <ButtonDefault type={"dark"} name={"Save post"}/>}
            {response.loading && (
            <ButtonDefault type={"confirm"} name={"Saving.."}
            disabled/>
            )}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
            </center>
            </DivBtn>
       </form>
       </>
)}
       </Containers>
       
        </>
        
    );
};

export default EditPost;
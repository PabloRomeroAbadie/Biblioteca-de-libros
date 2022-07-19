import React, { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        switch(name){
            case "title": 
            setTitle(value);
            break;
            case "author": 
            setAuthor(value);
            break;
            case "intro": 
            setIntro(value);
            break;
            case "completed": 
            setCompleted(e.target.checked);
            break; 
            case "review": 
            setReview(value);
            break;

            default:
        }
    }

    //guardar o decodificar una imagen de forma local en react
    function handleOnChangeFile(e){
        //procesar imagen directamente del front para no usar ningun servidor ni bd
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        //necesito mandar a llamar al archivo
        reader.readAsDataURL(file);

        //llamamos al evento
        reader.onloadend = function(){
            //cuando la carga del archivo termine (file) o sea lo hayamos podido leer, actualizamos el estado y le colocamos la informacion de su resultado de reader
            setCover(reader.result.toString())
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title, 
            author,
            cover,
            intro,
            completed,
            review,
        };

        //Todo: mandar a registrar libro
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title</div>
                    <input type="text" name="title" onChange={handleChange} value={title}/>
                </div>

                <div>
                    <div>Author</div>
                    <input type="text" name="author" onChange={handleChange} value={author}/>
                </div>

                <div>
                    <div>Cover</div>
                    <input type="file" name="cover" onChange={handleOnChangeFile}/>
                    <div></div>
                </div>

                <div>
                    <div>Introduction</div>
                    <input type="text" name="intro" onChange={handleChange} value={intro}/>
                </div>

                <div>
                    <div>Completed</div>
                    <input type="checkbox" name="completed" onChange={handleChange} value={completed}/>
                </div>

                <div>
                    <div>Review</div>
                    <input type="text" name="review" onChange={handleChange} value={review}/>
                </div>

                <input type="submit" value="Register Book" />
            </form>
        </div>
    );
};

export default Create;
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {useParams} from "react-router-dom"
import { useAppContext } from '../store/Store';

const View = () => {
    const [item, setItem] = useState(null);

    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []); 

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto"
        }
    }

    if(!item){
        return <Layout>Item not found</Layout>
    }
    return (
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover? <img src={item?.cover} width="400" alt={item?.title}/> : ""}</div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>-AUTHOR: {item?.author}.</div>
                    <div>-INTRODUCTION: {item?.intro}.</div>
                    <div>-COMPLETED: {item?.completed ? "Leído" : "Por terminar"}.</div>
                    <div>-REVIEW: {item.review}.</div>
                </div>
            </div>
        </Layout>
    );
};

export default View;
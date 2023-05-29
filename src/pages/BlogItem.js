import React from 'react';
import items from '../data/posts.json';
import { useParams, Link } from 'react-router-dom';

function BlogItem() {

    const { itemId } = useParams();

    const selectedPosts = items.find((item) => {
        return item.id === itemId;
    });

    return (
        <>
            <section className="page-container">
                <article>
                    <h1>{selectedPosts.title}}</h1>
                    <h3>{selectedPosts.date}</h3>
                    <p>{selectedPosts.content}</p>
                </article>
                <article>
                    <Link to="/">Terug naar Home</Link>
                </article>
            </section>
        </>
    );
}

export default BlogItem;
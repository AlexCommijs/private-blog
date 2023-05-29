import React from 'react';
import { Link } from "react-router-dom";
import posts from '../data/posts.json';
import './Blogposts.css';

function Blogposts() {
    return (
        <section className="page-container">
            <h2>Blogs overzichtspagina</h2>
            <h4>Aantal blogposts is {posts.length}</h4>
            <ul className="list-container">
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`/blogitem/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>
        </section>

    );
}

export default Blogposts;
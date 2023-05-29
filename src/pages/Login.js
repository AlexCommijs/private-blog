import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ toggleAuth }) {
    const navigate = useNavigate();

    function loggedIn() {
        toggleAuth(true);
        navigate('/');
    }

    return (
        <section className="page-container">
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button type="button" onClick={loggedIn}>
                Inloggen
            </button>
        </section>
    );
}

export default Login;
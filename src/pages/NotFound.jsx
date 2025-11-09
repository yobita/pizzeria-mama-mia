import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mt-5 text-center" style={{ color: 'var(--text-color)' }}>
            <img src="/error404.jpg" alt="Error 404 - Página No Encontrada" style={{ maxWidth: '100%', height: 'auto' }} />
            <h1 className="mt-4">¡Ups! Página no encontrada</h1>
            <p>Parece que te has perdido en el menú. No te preocupes, te ayudamos a volver.</p>
            <Link to="/" className="btn" style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}>Volver a la pizzería</Link>
        </div>
    );
};

export default NotFound;

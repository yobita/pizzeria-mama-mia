import React from 'react';

const Profile = () => {
    return (
        <div className="container mt-5" style={{ color: 'var(--text-color)' }}>
            <h1>Perfil de Usuario</h1>
            <p>Email: usuario@example.com</p>
            <button className="btn" style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}>Cerrar Sesión</button>
        </div>
    );
};

export default Profile;

import React from 'react';

const Admin = ({ user }) => {
  return (
    <>
      <h1>Página de administrador</h1>
      {user.role === 'admin' && (
        <p>Bienvenido a la página de administrador, {user.username}!</p>
      )}
    </>
  );
};

export default Admin;
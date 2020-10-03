import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Perfil.scss';
import fotoPrueba from '../assets/static/fotoPrueba.jpg';

const Perfil = () => (
  <main className='container'>
    <section className='perfil'>
      <button className='perfil__editar' />
      <figure className='perfil__img'>
        <img src={fotoPrueba} alt='Foto de perfil' />
      </figure>
      <p className='perfil__datos--nombre'>Luis Orlando Castañeda</p>
      <p className='perfil__datos--edad'>25 años</p>
      <p className='perfil__datos--locacion'>Tonalá, Jalisco</p>
      <div className='perfil__profesion'>
        <p className='perfil__profesion-titulo'>Ingeniero en computacion </p>
      </div>
    </section>
    <div className='favoritos'>
      <Link to='/Favoritos'>
        <button className='favoritos__boton'>Favorite Jobs</button>
      </Link>
    </div>
    <section className='info-general'>
      <button className='info-general__editar' />
      <h3 className='info-general__titulo'>Información General</h3>
      <div className='info-general__container'>
        <div className='info-general__container--personal'>
          <p className='nombreTitulo'> Nombre(s)</p>
          <p className='apellidoPTitulo'> Apellido Paterno</p>
          <p className='apellidoMTitulo'> Apellido Materno</p>
          <p className='nombre'>Orlando</p>
          <p className='apellidoP'>Castañeda</p>
          <p className='apellidoM'>Lopez</p>
        </div>
        <div className='info-general__container--usuario'>
          <p className='usuarioTitulo'> Usuario</p>
          <p className='correoTitulo'> Correo</p>
          <p className='contrasenaTitulo'> Contraseña</p>
          <p className='usuario'> Orla123</p>
          <p className='correo'> Orla@test.com</p>
          <p className='contrasena'> *******</p>
        </div>
      </div>
    </section>
    <section className='vacantes'>
      <h3 className='vacantes__titulo'>Vacantes</h3>
      <div className='vacantes__container'>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
        <div className='vacantes__container--vacante'>
          <p>Desarrollador Web Full Stack</p>
          <button className='editar' />
          <button className='borrar' />
        </div>
      </div>
    </section>
  </main>
);

export default Perfil;
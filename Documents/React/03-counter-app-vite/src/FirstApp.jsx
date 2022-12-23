import React from 'react';
import PropTypes from 'prop-types';




export const FirstApp = ({title,subtitle, name}) => {
//console.log(props)
if (!title){
  throw new Error('El titulo no existe')
}
  return (
  <>
  <h1>{title}</h1>
  <p>{subtitle+1}</p>
  <p> {name}</p>
  </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
FirstApp.defaultProps = {
  title:'No hay titulo',
  subtitle: 'No hay subtitulo',
  name : 'Joseline Franco'
}
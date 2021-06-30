import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass }) => {
    const { id, backgroundPosition } = pokeClass;

    return <button className="poke-cell"></button> 
};

export default PokeCell;
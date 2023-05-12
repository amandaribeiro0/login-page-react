import React from 'react';
import './LeftLogin.css';

import imagem from '../Images/software-integration-animate.svg';

function LeftLogin(){
    return(
        <div className='left-login'>
            <h1>Faça seu login</h1>
            <img src={imagem} className="img" alt="Animação computador"></img>
        </div>
    )

};

export default LeftLogin;
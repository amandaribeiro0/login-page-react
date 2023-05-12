import React from 'react';
import './RightLogin.css';

function RightLogin() {
    return (
        <div className='right-login'>
            <div className='card-login'>
                <div className='input'>
                    <label>Usuário</label>
                    <input type="email" name="usuario" placeholder="Digite seu e-mail" />
                </div>
                <div className='input'>
                    <label>Senha</label>
                    <input type='password' name='senha' placeholder='Digite sua senha' />
                </div>

                <button className='btn-login'>Login</button>

            </div>
        </div>
    )
};

export default RightLogin;
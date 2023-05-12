import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css'
import LeftLogin from './assets/LeftLogin/LeftLogin';
import RightLogin from './assets/RightLogin/RightLogin';

ReactDOM.render(

  <React.StrictMode >
    <div className='main-login'>
    <LeftLogin/>
    <RightLogin/>
    </div>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
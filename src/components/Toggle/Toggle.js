import React, {useContext} from 'react';
import {AppContext, AppHookContext} from '../../provider/appProvider';
import './Toggle.scss';

const Toggle = ({clickHandle}) => {
  const {setAltTheme} = useContext(AppHookContext);
  const {altTheme} = useContext(AppContext);

  const toggle = () => {
    setAltTheme(!altTheme);
  }

  return (
    <div className={`toggle${altTheme ? ' toggle--checked' : ''}`} onClick={toggle}>
      <div className="toggle__track">
        <div className="toggle__icon toggle__icon--checked">
          <span>#</span>
        </div>
        <div className="toggle__icon toggle__icon--x">
          <img src={require('../../assets/svgs/coin.svg')} alt="smb3 theme checked" />
        </div>
        <div className="toggle__thumb"></div>
      </div>
    </div>
  );
};

export default Toggle;
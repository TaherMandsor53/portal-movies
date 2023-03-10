import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImg from '../../assets/Error.svg';

export default function ErrorHandleComponent() {
  const navigate = useNavigate();
  const onUrlClick = () => {
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="error-handle-main">
      <div className="error-text">
        Oops... you ended at wrong place.
        <br />
        Please
        <span onClick={onUrlClick} className="login-text">
          go back
        </span>
        in application.
      </div>
      <div className="error-img-section">
        <img src={ErrorImg} alt="error-img" className="error-img" />
      </div>
    </div>
  );
}

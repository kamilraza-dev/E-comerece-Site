import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';

function ProductModal(props) {
  const state = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginUser = () => {
    let userEnteredMail = document.getElementById('mail');
    let userEnteredPass = document.getElementById('userPass');

    const userEmail = localStorage.getItem('UserEmail');
    const UserPassword = localStorage.getItem('UserPassword');


    if(userEnteredMail.value == userEmail && userEnteredPass.value == UserPassword){
      localStorage.setItem('userLogin', 'true');
      window.location.reload();      
    } else {
      const inValidMessage = document.getElementById("invalid-message");
      inValidMessage.innerText = "Invalid Details!"
      userEnteredMail.value = ""
      userEnteredPass.value = ""
    }

  }

  const emplyInvalidMessage = () => {
    const inValidMessage = document.getElementById("invalid-message");
    inValidMessage.innerText = " "
  }

  return (
    <>
      <span className='nav-link mx-2 text-dark' onClick={handleShow}>Login</span>

      <Modal centered show={show} onHide={handleClose} className='login-modal'>


            <div className="login-box">
              <p>Login</p>
              <form>
                <div className="user-box">
                  <input id='mail' required="" name="" type="text" onClick={emplyInvalidMessage}/>
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input id='userPass' required="" name="" type="password" onClick={emplyInvalidMessage}/>
                  <label>Password</label>
                </div>
                <a className='submit-btn' onClick={loginUser}>
                  <span />
                  <span />
                  <span />
                  <span />
                  Submit
                </a>
              </form>

              <p id='invalid-message'>
                
              </p>
                      <Button variant="secondary" onClick={handleClose} className=''>
                        Close
                      </Button>
            </div>


      </Modal>
    </>
  );
}

export default ProductModal;
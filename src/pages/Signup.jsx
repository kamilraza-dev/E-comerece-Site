import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';

function SignupForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const SaveDetails = () => {
    const userName = document.getElementById('userName').value;
    const userMail = document.getElementById('mail').value;
    const userPass = document.getElementById('userPass').value;

    localStorage.setItem('UserName', userName);
    localStorage.setItem('UserEmail', userMail);
    localStorage.setItem('UserPassword', userPass);

    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        SignUp
      </Button>
      <Modal centered show={show} onHide={handleClose} className='login-modal'>


            <div className="login-box">
              <p>SignUp</p>
              <form>
                <div className="user-box">
                  <input id='userName' required="" name="" type="text" />
                  <label>Full Name</label>
                </div>
                <div className="user-box">
                  <input id='mail' required="" name="" type="text" />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input id='userPass' required="" name="" type="password" />
                  <label>Password</label>
                </div>
                <a className='submit-btn' onClick={SaveDetails}>
                  <span />
                  <span />
                  <span />
                  <span />
                  Submit
                </a>
              </form>
                      <Button variant="secondary" onClick={handleClose} className=''>
                        Close
                      </Button>
            </div>


      </Modal>
    </>
  );
}

export default SignupForm;
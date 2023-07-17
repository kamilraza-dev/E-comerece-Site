import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './Components.css'

function ProductModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Details
      </Button>

      <Modal centered size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.details.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                  props.details.images.map((img,i) => (
                    <Carousel.Item key={i}>
                      <img
                        className="d-block modal-image"
                        src={img}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  )
                  )
                }


              </Carousel>

            </div>
            <div className="col-md-6 modal-details">
              <h3>
                <b>{props.details.title}</b>
              </h3>
              <p>
                {props.details.description}
              </p>
              <p>
                Brand Name: <b>{props.details.brand}</b>
              </p>
              <p>
                Rating: <b>{props.details.rating}</b>
              </p>
              <h3>
                <b>${props.details.price}</b>
              </h3>
            </div>

          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductModal;
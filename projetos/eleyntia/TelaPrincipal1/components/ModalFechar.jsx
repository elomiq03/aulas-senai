import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalFechar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='botaofechar'>
        X
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='ModalInteiro'
      >
        <Modal.Header closeButton >
          <Modal.Title className='TtuloFecharLista'>Fechar Lista</Modal.Title>
        </Modal.Header>
        <Modal.Body className='TextoModalFechar'>
          Tem certeza de que gostaria de fechar sua lista?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='BotaoVoltarFechar'>
            Voltar
          </Button>
          <Button variant="primary" className='BotaoFecharLista'>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFechar;
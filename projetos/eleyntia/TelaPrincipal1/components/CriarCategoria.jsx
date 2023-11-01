//{é o adicionar tarefas, está dentro do componente menu
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Criarcategoria(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     {/*É o botão para abrir o formulário*/}
      <Button  className='buttonCriar' variant="primary" onClick={handleShow}>
        <img className='buttonCriarImg' src="https://cdn-icons-png.flaticon.com/128/5535/5535489.png?ga=GA1.1.415457938.1692991212&track=ais" alt="" />
      </Button>
      <Modal show={show} onHide={handleClose} className='center2'>
         {/*Título do formulário*/}
        <Modal.Header closeButton className='adic'>
          <Modal.Title>Criar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {/*INÍCIO DOS CAMPOS PARA PREENCHIMENTO*/}
        <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder={props.texto1}
                autoFocus
              />
              <Form.Label></Form.Label>
              <Form.Control
                type=""
                placeholder={props.texto2}
                autoFocus
              />
            </Form.Group>
            <Form>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
            >
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

           {/*FIM DOS CAMPOS PARA PREENCHIMENTO*/}

          <div className='center'>
           {/*Botão para criar a categoria e fechar o modal do formulário*/}
          <Button variant="primary" onClick={handleClose} className='white testE'>
            Salvar 
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Criarcategoria
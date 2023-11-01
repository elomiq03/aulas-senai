//{é o adicionar tarefas, está dentro do componente menu
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Formulario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     {/*É o botão para abrir o formulário*/}
      <Button  className='buttonCriar' variant="primary" onClick={handleShow}>
        <img className='buttonCriarImg' src="https://cdn-icons-png.flaticon.com/128/7054/7054629.png?uid=R77723682&ga=GA1.1.135938526.1694621849" alt="" />
      </Button>
      <Modal show={show} onHide={handleClose}>
         {/*Título do formulário*/}
        <Modal.Header closeButton className='adic'>
          <Modal.Title className='white'>Adicionar tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {/*INÍCIO DOS CAMPOS PARA PREENCHIMENTO*/}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='white'>Data</Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
              <Form.Label className='white'>Título da tarefa </Form.Label>
              <Form.Control
                type="test"
                placeholder="Adicione o título da tarefa"
                autoFocus
              />
              <Form.Label className='white'>Categoria </Form.Label>
              <Form.Control
                type="test"
                placeholder="Adicione uma categoria"
                autoFocus
              />
              <Form.Label className='white'>Atribuir </Form.Label>
              <Form.Control
                type="test"
                placeholder="Atribuir a tarefa "
                autoFocus
              />
              <Form.Label className='white'>Classificação </Form.Label>
              <Form.Control
                type="test"
                placeholder="Classifique"
                autoFocus
              />
            </Form.Group>
            <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className='white'>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

           {/*FIM DOS CAMPOS PARA PREENCHIMENTO*/}

          <div className='center'>
           {/*Botão para criar a tarefa e fechar o modal do formulário*/}
          <Button variant="primary" onClick={handleClose} className='white'>
            Criar
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VizTarefas from './VizTarefas'
import Modal from 'react-bootstrap/Modal';

{/*COMPONENTE MODAL "VIZUALIZAR TAREFAS"*/}

function Formulario(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/*BOTÃO QUE APARECE PARA CLICAR E O MODAL APARECER*/}
      <Button  className='buttonVizualizar' variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='cabecarioCheck' closeButton>
          <Modal.Title className='NameVizTarefa'> Quarta, 18 de junho </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
{/*"DIA" COM AS TAREFAS*/}
            <VizTarefas/>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='BtnVerTarefa' variant="secondary" onClick={handleClose}>
            Salvar
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;
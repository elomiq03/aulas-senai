import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Formulario from './Formulario';

function ComponentesMenu() {
    return (
        <>
{/*nav contendo a img, o titulo de pagina inicial fazendo um tipo de aba*/}
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='navbar.comp'>
                        <img
                            alt=""
                            src="https://cdn-icons-png.flaticon.com/128/6583/6583566.png?uid=R77723682&ga=GA1.1.135938526.1694621849"
                            width="20"
                            height="20"
                            className="img_comp"
                        />{' '}
                        Página Inicial
                    </Navbar.Brand>
                </Container>
            </Navbar>

{/*nav contendo a img, o titulo de adicionar tarefas fazendo um tipo de aba e chamando outro componente pra adicionar as tarefas*/}
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='navbar.comp'>
                        <Formulario>

                        </Formulario>{' '}
                        Adicionar tarefas

                    </Navbar.Brand>
                </Container>
            </Navbar>
{/*nav contendo a img, o titulo de opções fazendo um tipo de aba para o menu*/}
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='navbar.comp'>
                        <img
                            alt=""
                            src="https://cdn-icons-png.flaticon.com/128/5989/5989904.png?ga=GA1.1.135938526.1694621849"
                            width="20"
                            height="20"
                            className="img_comp"
                        />{' '}
                        Opções
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default ComponentesMenu;
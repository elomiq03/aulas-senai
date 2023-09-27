import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ComponentesRepetentes from '../components/ComponentesRepetentes';
import ComponenteFooter from './ComponenteFooter';
import ComponentesFilhos from './ComponentesFilhos'

import ComponentesMenu from './ComponentesMenu';


function MenuLateral({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
{/*parte em cima onde lava o icon e o "nome do usuario"*/}
            <Button variant="primary" onClick={toggleShow} className="me-2 botaoMenuLateral ">
                <img src="https://cdn-icons-png.flaticon.com/128/561/561245.png?ga=GA1.1.208605927.1692992947&track=ais" alt="" width={30} height={30} />
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <img className='img_usuario' src="https://cdn-icons-png.flaticon.com/128/225/225237.png?ga=GA1.1.135938526.1694621849" alt="" width={40} height={40} />
                    <Offcanvas.Title className=''>Nome do usuario</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/*chamando o componente do menu, home,adicionar tarefas e opções*/}
                    
                    <ComponentesMenu></ComponentesMenu>

                    {/*A partir disto, da qui pra baixo chama-se um componente  repetente e da uma img e um p a eles, logo em baixo se chama 
                    um componente filho colocando sua imagem e p e assim por 4 vezes e por ultimo se faz a mesma coisa com o footer,ele recebe 
                    sua img de icones e seu texto p*/}
                    <ComponentesRepetentes
                        name="Minhas Listas +"
                        imageUrl="https://cdn-icons-png.flaticon.com/128/2209/2209139.png?uid=R77723682&ga=GA1.1.135938526.1694621849"
                    />

                    <ComponentesFilhos
                        titulo="'Nome Da Sua Lista'"
                        logo="https://cdn-icons-png.flaticon.com/128/4625/4625353.png?ga=GA1.1.135938526.1694621849" />

                    <ComponentesRepetentes
                        name="Tarefas Proximas"
                        imageUrl="https://cdn-icons-png.flaticon.com/128/6919/6919620.png?uid=R77723682&ga=GA1.1.135938526.1694621849" />

                    <ComponentesFilhos
                        titulo="'Nome Da Sua Tarefa'"
                        logo="https://cdn-icons-png.flaticon.com/128/4625/4625353.png?ga=GA1.1.135938526.1694621849" />


                    <ComponentesRepetentes
                        name="Eventos Astrologicos"
                        imageUrl="https://cdn-icons-png.flaticon.com/128/2303/2303983.png?ga=GA1.1.135938526.1694621849" />

                    <ComponentesFilhos
                        titulo="'Hoje vai bla bla bla'"
                        logo="https://cdn-icons-png.flaticon.com/128/4625/4625353.png?ga=GA1.1.135938526.1694621849" />

                    <ComponentesRepetentes
                        name="Categorias +"
                        imageUrl="https://cdn-icons-png.flaticon.com/128/5114/5114213.png?ga=GA1.1.135938526.1694621849" />

                    <ComponentesFilhos
                        titulo="'Escola'"
                        logo="https://cdn-icons-png.flaticon.com/128/4625/4625353.png?ga=GA1.1.135938526.1694621849" />

                    <ComponenteFooter
                        nomes="Convidar"
                        images="./public/img/logo.png"
                        image2="https://cdn-icons-png.flaticon.com/128/3464/3464867.png?uid=R77723682&ga=GA1.1.135938526.1694621849"
                        nometwo="Ajuda"
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
}


export default MenuLateral;
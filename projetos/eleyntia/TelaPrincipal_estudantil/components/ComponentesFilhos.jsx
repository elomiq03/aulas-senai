export default function ComponentesFilhos(props) {
    return (
        <>
        {/*div contendo eagrupando a img e o p como nome do lado*/}
            <div className="bg-body-tertiary" id="teste">
                <img src={props.logo} width="20" height="20" className="img_compp" />
                <p className="texto_comp">  {props.titulo}</p>
            </div>

        </>
    );
}
{/*é o componente com funçaoque vai dentro dos repetentes, sao as tarefas, catgorias e sub topicos dos componentes principais*/}
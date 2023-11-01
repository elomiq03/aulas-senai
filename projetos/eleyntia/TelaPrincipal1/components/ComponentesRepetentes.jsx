export default function ComponentesRepetentes(props) {
    return (
        <>
            <section href="#home" id='navbar-comp'>
                {/*div contendo eagrupando a img e o p como nome do lado*/}
                <div className="bg-body-tertiary" id="teste">
                    <img src={props.imageUrl} width="23" height="23" className="img_comp" />
                    <b><p className="texto_comp">  {props.name}</p></b>
                </div>


 
            </section>
        </>
    );
}
{/*é o componente com funçaoque vai futuramente levar os componentes filhos, sao os titulos como as tarefas, catgorias e levam a img do lado*/}
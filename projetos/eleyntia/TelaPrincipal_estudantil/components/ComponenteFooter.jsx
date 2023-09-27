{/*componente da parte inferior do menu lateral com funçao*/}
export default function ComponenteFooter(props) {
    return (
        <>
            <section href="#home" className='navbar.comp'>{/*section para agrupar as img e os textos do lado*/}
                <div className="bg-body-tertiary" id="teste">
                    <img src={props.images} width="23" height="23" className="imgfootermenu" />{/*as img dos icones de convidar e ajuda*/}
                    <b><p className="texto_comp">  {props.nomes}</p></b>{/*o texto do lado dos  icones de convidar e ajuda*/}
                    <img src={props.image2} width="23" height="23" className="imgfootermenu2" />{/*as img dos icones de convidar e ajuda*/}
                    <b><p className="texto_comp">  {props.nomes}</p></b>{/*o texto do lado dos  icones de convidar e ajuda*/}
                    <b><p className="texto_comp">  {props.nometwo}</p></b>
                </div>

            </section>
        </>
    );
}


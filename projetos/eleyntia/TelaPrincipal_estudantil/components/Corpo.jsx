import MenuLateral from "./MenuLateral"
import VerTarefa from "./VerTarefa"
export default function Corpo(props){
    return(
    
        //{MAIN COM O CABEÇARIO DA PAGINA}
     <main className="CorpoBody " >

          
          {/*SECTION COM A PRIMEIRA PARTE DO CABEÇARIO (TEXTOS E O BOTÃO QUE ABRE O MENU LATERAL) */}
            <section className="cabecario" >
            
                {/*MENU LATERAL*/}
                  <MenuLateral/>
                
          {/* DIV COM OS TEXTOS (NOME DA LISTA E NOME DA PESSOA)*/}
                 <div className="titulo" >
                     <h1> Nome da Lista</h1>
                     <li>Pegasus-Acadêmico</li>
                </div>
            
            </section>

            {/* SECTION COM A SEGUNDA PARTE DO CABEÇARIO*/}
            <section className="barra" >

                  {/* SELECT QUE PERMITE ESCOLHER O MÊS E OPTION COM CADA MÊS*/}
                        <select className="mesCalendario" name="Mês">
                            <option value="bota">Janeiro</option>
                            <option value="fla">Fevereiro</option>
                            <option value="flu">Abril</option>
                            <option value="vasco">Maio</option>
                            <option value="vasco">Junho</option>
                            <option value="vasco">Julho</option>
                            <option value="vasco">Agosto</option>
                            <option value="vasco">Setembro</option>
                            <option value="vasco">Outubro</option>
                            <option value="vasco">Novembro</option>
                            <option value="vasco">Dezembro</option>
                        </select>
                   
                {/* INPUT PESQUISAR  */}
                    <input type="search"  name="" id="inputPesquisar" />
                
                {/* DIV COM A IMAGEM COM SIBOLO DE PESQUISA  */}    
                    <div className="imgDivPesquisar" >
                        <img className="imgPesquisar" src="https://cdn-icons-png.flaticon.com/128/751/751463.png?ga=GA1.1.208605927.1692992947" alt="" />
                    </div>
                
                {/* BOTÃO COMPARTILHAR  */}
                    <button className="buttonHeaderCorpo" > Compartilhar </button>
                

            </section>   

            <VerTarefa/>
     </main>     
        


    )
}
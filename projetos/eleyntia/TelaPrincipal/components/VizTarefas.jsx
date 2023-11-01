import Tarefas from "./Tarefas"
export default function Mae(props) {
    return (
        <section className="BoxTarefas" >
  {/*aqui é uma "caixinha" em que cada dia tera uma, e dentro a tarefa são as tarefas vizualizadas*/}
            <div className="boxData" >
               <Tarefas/>
               <Tarefas/>
               <Tarefas/>
               <Tarefas/>
            </div>
        </section>
    )
}


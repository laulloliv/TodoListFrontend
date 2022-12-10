import { ArrowLeft, CheckSquareOffset } from 'phosphor-react'
import { Search } from '../form/Search'
import { Task } from '../task'
import { Title } from '../title'
import './style.css'

export const Tasks = (props: any) => {
  return (
    <div className="body">
      <Title
        child={<ArrowLeft size={32} />}
        text={'Minhas Tarefas'}
        children={<CheckSquareOffset size={32} />}
        isHome={false}
        onClick={props.onClick}
      ></Title>
      <Search></Search>
      <div id="details">
        <p className="details-p">Categoria: Todos</p>
        <p className="details-p">Qtd: 14</p>
      </div>
      <div className="components-tasks">
        <Task
          status={'status-t'}
          text={'Lavar roupas brancas'}
          data={'10/12/2022'}
        ></Task>
        <Task
          status={'status-2'}
          text={'Comprar aspirador novo'}
          data={'6/12/2022'}
        ></Task>
        <Task
          status={'status-3'}
          text={'Pagar a escola do Pedro'}
          data={'10/12/2022'}
        ></Task>
      </div>
    </div>
  )
}

import { ArrowLeft, CheckSquareOffset } from 'phosphor-react'
import './tasks.css'
import { Title } from '../components/title'
import { Search } from '../components/form/Search'
import { Task } from '../components/task'

export const Tasks = () => {
  return (
    <div className="body">
      <Title
        child={<ArrowLeft size={32} />}
        text={'Minhas Tarefas'}
        children={<CheckSquareOffset size={32} />}
      ></Title>
      <Search></Search>
      <div id="details">
        <p>Categoria: Todos</p>
        <p>Qtd: 14</p>
      </div>
      <div className="components">
        <Task
          status={'status-1'}
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

import { ArrowLeft, CheckSquareOffset } from 'phosphor-react'
import { Search } from '../../components/form/Search'
import { Task } from '../task'
import { Title } from '../../components/title'
import './style.css'

export const Tasks = (props: any) => {
  function List() {
    const data = props.data
    const listTasks = data.map((r: any) => (
      <Task
        key={r.id}
        status={'status-t'}
        text={r.titulo}
        dataPrev={r.dataPrevista}
        data={r}
      ></Task>
    ))
    return <div className="components-tasks">{listTasks}</div>
  }

  return (
    <div className="body">
      <Title
        child={<ArrowLeft size={32} />}
        text={'Minhas Tarefas'}
        children={<CheckSquareOffset size={32} />}
        isHome={false}
        onClick={props.onClick}
      ></Title>
      <Search
        toCreate={props.toCreate}
        handler_search={props.handler_search}
      ></Search>
      <div id="details">
        {props.find ? (
          <p className="details-p">{props.category}</p>
        ) : (
          <p className="details-p">Categoria: {props.category}</p>
        )}

        <p className="details-p">Qtd: {props.data.length}</p>
      </div>
      <List></List>
    </div>
  )
}

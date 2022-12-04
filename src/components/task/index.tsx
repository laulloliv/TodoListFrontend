import internal from 'stream'
import './style.css'

interface TaskProps {
  status?: string
  text?: string
  data?: string
}

export const Task = ({ status, text, data }: TaskProps) => {
  return (
    <>
      <div className="task">
        <div className="info">
          <p id="name-task">{text}</p>
          <div id={status}></div>
        </div>
        <p id="dataprevista-task">Concluir até {data}</p>
      </div>
    </>
  )
}

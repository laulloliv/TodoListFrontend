import {
  CalendarCheck,
  CheckCircle,
  Tag,
  TextAlignLeft,
  TrashSimple
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { check_data } from '../../utils/data'
import './style.css'

interface TaskProps {
  status?: string
  text?: string
  dataPrev?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  data: any
}

export const Task = ({ status, text, dataPrev, onClick, data }: TaskProps) => {
  const [show, setShow] = useState(true)
  const [done, setDone] = useState(true)
  const [dataStatusOk, setDataStatusOk] = useState(true)

  // Deleta uma tarefa
  async function deleteTask(id: number) {
    const res = await api.delete(`/tarefas/${id}`)
  }

  const handler_delete_task = (id: number) => {
    deleteTask(id)
    window.location.reload()
    console.log('Tarefa deletada!')
  }

  const data_ver = (dataPrev: any) => {
    let dataVal = check_data(dataPrev, '10/12/2022')

    if (dataVal < 0) {
      console.log('Atividade em atraso', dataVal)
      setDataStatusOk(false)
    }
    console.log('Atividade em dia', dataVal)

    return
  }

  useEffect(() => {
    data_ver(dataPrev)
  }, [dataPrev, dataStatusOk])

  return show ? (
    <div className="task">
      <div className="info">
        <p
          id={done ? 'name-task' : 'name-task-done'}
          onClick={() => {
            setShow(!show)
            data_ver(dataPrev)
          }}
        >
          {text}
        </p>
        <div
          id={
            dataStatusOk && done ? 'status-2' : done ? 'status-1' : 'status-3'
          }
          onClick={() => {
            setDone(!done)
          }}
        ></div>
      </div>
      <p id="dataprevista-task">
        {' '}
        {done ? 'Concluir até ' : 'Concluído em '}
        {dataPrev}
      </p>
    </div>
  ) : (
    <>
      <div className="task-details">
        <div className="info">
          <p
            id={done ? 'name-task' : 'name-task-done'}
            onClick={() => setShow(!show)}
          >
            {text}
          </p>

          {done ? (
            <CheckCircle
              size={32}
              id={dataStatusOk ? 'status-t2' : 'status-t'}
              onClick={() => setDone(!done)}
            />
          ) : (
            <div id="status-3" onClick={() => setDone(!done)}></div>
          )}
        </div>
        <div className="icons">
          <CalendarCheck size={32} />
          <p id="dtprev-details">
            {done ? 'Concluir até ' : 'Concluído em '} {dataPrev}
          </p>
        </div>
        <div className="icons" id="text">
          <TextAlignLeft size={32} />
          <p id="desc-details">{data.descricao}</p>
        </div>
        <div className="icons">
          <Tag size={32} />
          <p id="category-details">{data.categoria.titulo}</p>
        </div>
        <div
          className="footer-task"
          onClick={() => handler_delete_task(data.id)}
        >
          <TrashSimple size={26} id="delete-icon" />
        </div>
      </div>
    </>
  )
}

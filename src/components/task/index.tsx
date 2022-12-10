import {
  CalendarCheck,
  CheckCircle,
  Tag,
  TextAlignLeft,
  TrashSimple
} from 'phosphor-react'
import { useState } from 'react'
import './style.css'

interface TaskProps {
  status?: string
  text?: string
  data?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Task = ({ status, text, data, onClick }: TaskProps) => {
  const [show, setShow] = useState(true)

  return show ? (
    <>
      <div className="task">
        <div className="info">
          <p id="name-task" onClick={() => setShow(!show)}>
            {text}
          </p>
          <div id="status-1"></div>
        </div>
        <p id="dataprevista-task">Concluir até {data}</p>
      </div>
    </>
  ) : (
    <>
      <div className="task-details">
        <div className="info">
          <p id="name-task" onClick={() => setShow(!show)}>
            {text}
          </p>
          {/* <div id={status}></div> */}
          <CheckCircle size={32} id={status} />
        </div>
        <div className="icons">
          <CalendarCheck size={32} />
          <p id="dtprev-details">Concluir até {data}</p>
        </div>
        <div className="icons" id="text">
          <TextAlignLeft size={32} />
          <p id="desc-details">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            ipsa dignissimos ab quaerat. Quam cumque animi vel esse consequatur.
            Ut!
          </p>
        </div>
        <div className="icons">
          <Tag size={32} />
          <p id="category-details">Outras</p>
        </div>
        <div className="footer-task">
          <TrashSimple size={26} />
        </div>
      </div>
    </>
  )
}

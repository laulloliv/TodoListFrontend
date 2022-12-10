import { ArrowLeft, CheckSquareOffset } from 'phosphor-react'
import { Title } from '../../title'
import './style.css'

export const NewTask = (props: any) => {
  return (
    <div className="body-task">
      <Title
        text="Nova Tarefa"
        children={<CheckSquareOffset size={32} />}
        child={<ArrowLeft size={32} />}
        onClick={props.onClick}
      ></Title>
      <form id="form-new-task">
        <label className="label-form">
          Título
          <input
            type="text"
            className="i-form"
            placeholder="Insira um título"
          />
        </label>
        <label id="textarea">
          Descrição
          <textarea
            className="itextarea"
            placeholder="Insira uma descrição"
          ></textarea>
        </label>
        <div className="inline">
          <label className="label-form" id="label">
            Data prevista
            <input
              type="date"
              className="i-form"
              placeholder="Data prevista"
              id="datap"
            ></input>
          </label>
          <label className="label-form" id="label">
            Categoria
            <select name="select-category" id="select" required>
              <option value={0} id="sdefault" disabled selected>
                Selecione...
              </option>
              <option value={1}>Trabalho</option>
              <option value={2}>Viagens</option>
              <option value={3}>Educação</option>
              <option value={4}>Esportes</option>
              <option value={5}>Outros</option>
            </select>
          </label>
          <button id="create-task">Adicionar</button>
        </div>
      </form>
    </div>
  )
}

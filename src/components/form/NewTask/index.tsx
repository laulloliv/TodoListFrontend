import { ArrowLeft, CheckSquareOffset } from 'phosphor-react'
import { useState } from 'react'
import api from '../../../services/api'
import { Title } from '../../title'
import './style.css'

export const NewTask = (props: any) => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [dataPrev, setDataPrev] = useState('')
  const [categoria, setCategoria] = useState('')

  const newTaskSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      titulo: titulo,
      descricao: descricao,
      dataPrevista: dataPrev,
      dataConclusao: null,
      categoria: {
        id: categoria
      },
      status: {
        id: 1
      }
    }
    // Cria nova tarefa
    async function postTask(data: Object) {
      const response = await api.post('/tarefas', data)
      console.log(response.data)
    }
    postTask(data)
    console.log('Tarefa Criada!')
  }

  return (
    <div className="body-task">
      <Title
        text="Nova Tarefa"
        children={<CheckSquareOffset size={32} />}
        child={<ArrowLeft size={32} />}
        onClick={props.onClick}
      ></Title>
      <form id="form-new-task" onSubmit={e => newTaskSubmit(e)}>
        <label className="label-form">
          Título
          <input
            name="titulo"
            type="text"
            className="i-form"
            placeholder="Insira um título"
            onChange={e => setTitulo(e.target.value)}
            value={titulo}
            required
          />
        </label>
        <label id="textarea">
          Descrição
          <textarea
            name="descricao"
            className="itextarea"
            placeholder="Insira uma descrição"
            onChange={e => setDescricao(e.target.value)}
            value={descricao}
            required
          ></textarea>
        </label>
        <div className="inline">
          <label className="label-form" id="label">
            Data prevista
            <input
              name="dataPrev"
              type="date"
              className="i-form"
              // placeholder="mm/dd/aaaa"
              id="datap"
              required
              onChange={e => setDataPrev(e.target.value)}
              value={dataPrev}
            ></input>
          </label>
          <label className="label-form" id="label">
            Categoria
            <select
              name="select-category"
              id="select"
              required
              onChange={e => setCategoria(e.target.value)}
              value={categoria}
            >
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
          <button id="create-task" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  )
}

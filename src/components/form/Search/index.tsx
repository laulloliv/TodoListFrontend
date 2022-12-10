import { MagnifyingGlass } from 'phosphor-react'
import './style.css'

export const Search = (props: any) => {
  return (
    <div className="isearch-bcreate">
      <label id="lsearch">
        <MagnifyingGlass size={32} />
        <input type="text" placeholder="Buscar tarefa" id="isearch" />
      </label>
      <button id="bcreate" onClick={props.toCreate}>
        Criar tarefa
      </button>
    </div>
  )
}

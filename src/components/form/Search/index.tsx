import { MagnifyingGlass } from 'phosphor-react'
import './style.css'

export const Search = () => {
  return (
    <form className="isearch-bcreate">
      <label id="lsearch">
        <MagnifyingGlass size={32} />
        <input type="text" placeholder="Buscar tarefa" id="isearch" />
      </label>
      <button id="bcreate" type="submit">
        Criar tarefa
      </button>
    </form>
  )
}

import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import './style.css'

export const Search = (props: any) => {
  const [data, setData] = useState()
  const [result, setResult] = useState('')

  return (
    <form
      className="isearch-bcreate"
      onSubmit={e => props.handler_search(e, result)}
    >
      <label id="lsearch">
        <MagnifyingGlass size={32} />
        <input
          type="text"
          placeholder="Buscar tarefa"
          id="isearch"
          name="titulo"
          onChange={e => setResult(e.target.value)}
          value={result}
        />
      </label>
      <button id="hidden" type="submit"></button>
      <button id="bcreate" onClick={props.toCreate}>
        Criar tarefa
      </button>
    </form>
  )
}

import {
  Barbell,
  ClipboardText,
  GraduationCap,
  Hash,
  ListBullets,
  PaperPlaneTilt,
  SuitcaseSimple
} from 'phosphor-react'
import { BoxCategory } from '../components/box'
import { Search } from '../components/form/Search'
import { Title } from '../components/title'
import { useEffect, useState } from 'react'
import './style.css'
import { NewTask } from '../components/form/NewTask'
import { Tasks } from './list'
import api from '../services/api'

export const View = () => {
  const [view, setView] = useState(0)
  const [showTasks, setShowTasks] = useState(0)
  const [searchByName, setSearchByName] = useState([])
  const [search, setSearch] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [trabalho, setTrabalho] = useState([])
  const [viagens, setViagens] = useState([])
  const [educacao, setEducacao] = useState([])
  const [esportes, setEsportes] = useState([])
  const [outras, setOutras] = useState([])

  useEffect(() => {
    // Lista todas as tarefas
    async function getAllTasks() {
      const response = await api.get('/tarefas')
      setTarefas(response.data)
    }
    getAllTasks()

    // Lista apenas da categoria trabalho
    async function getWorkTasks() {
      const response = await api.get('/tarefas/categoria/trabalho')
      setTrabalho(response.data)
    }
    getWorkTasks()

    // Lista apenas da categoria viagens
    async function getTravelTasks() {
      const response = await api.get('/tarefas/categoria/viagens')
      setViagens(response.data)
    }
    getTravelTasks()

    // Lista apenas da categoria educacao
    async function getEducationTasks() {
      const response = await api.get('/tarefas/categoria/educação')
      setEducacao(response.data)
    }
    getEducationTasks()

    // Lista apenas da categoria esportes
    async function getSportsTasks() {
      const response = await api.get('/tarefas/categoria/esportes')
      setEsportes(response.data)
    }
    getSportsTasks()

    // Lista apenas da categoria outras
    async function getOthersTasks() {
      const response = await api.get('/tarefas/categoria/outras')
      setOutras(response.data)
    }
    getOthersTasks()
  }, [])

  useEffect(() => {
    // // Lista resultada da busca por nome
    async function getByNameTask(titulo: string) {
      const response = await api.get(`/tarefas/titulo/${titulo}`)
      setSearchByName(response.data)
      console.log('Lista busca')
      console.log(searchByName)
    }
    getByNameTask(search)
  }, [search])

  // Callback de Pesquisa
  const handler_search = (e: any, result: string) => {
    e.preventDefault()
    console.log(result)
    setSearch(result)
    setView(3)
    return
  }

  const Home = () => {
    return (
      <div className="body-home">
        <Title
          text={'Minhas Tarefas'}
          children={<ListBullets size={32} />}
          isHome={true}
        />
        <Search
          toCreate={() => setView(2)}
          handler_search={handler_search}
        ></Search>
        <div className="components-home">
          <BoxCategory
            className={'category-1'}
            text={'Todos'}
            item={'item-1'}
            children={<ClipboardText size={32} />}
            onClick={() => {
              setView(1)
              setShowTasks(0)
            }}
          ></BoxCategory>
          <BoxCategory
            className={'category-2'}
            text={'Trabalho'}
            item={'item-2'}
            children={<SuitcaseSimple size={32} />}
            onClick={() => {
              setView(1)
              setShowTasks(1)
            }}
          ></BoxCategory>
          <BoxCategory
            className={'category-3'}
            text={'Viagens'}
            item={'item-3'}
            children={<PaperPlaneTilt size={32} />}
            onClick={() => {
              setView(1)
              setShowTasks(2)
            }}
          ></BoxCategory>
          <BoxCategory
            className={'category-4'}
            text={'Educação'}
            item={'item-4'}
            children={<GraduationCap size={32} />}
            onClick={() => {
              setView(1)
              setShowTasks(3)
            }}
          ></BoxCategory>
          <BoxCategory
            className={'category-5'}
            text={'Esportes'}
            item={'item-5'}
            children={<Barbell size={32} />}
            onClick={() => {
              setView(1)
              setShowTasks(4)
            }}
          ></BoxCategory>
          <BoxCategory
            className={'category-6'}
            text={'Outras'}
            item={'item-6'}
            children={<Hash size={32} />}
            onClick={() => {
              setView(1)
              setShowTasks(5)
            }}
          ></BoxCategory>
        </div>
      </div>
    )
  }

  const Start = () => {
    switch (view) {
      case 0:
        return <Home></Home>
      case 1:
        switch (showTasks) {
          case 0:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Todos'}
                find={false}
                data={tarefas}
                handler_search={handler_search}
              ></Tasks>
            )
          case 1:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Trabalho'}
                find={false}
                data={trabalho}
                handler_search={handler_search}
              ></Tasks>
            )
          case 2:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Viagens'}
                find={false}
                data={viagens}
                handler_search={handler_search}
              ></Tasks>
            )
          case 3:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Educação'}
                find={false}
                data={educacao}
                handler_search={handler_search}
              ></Tasks>
            )
          case 4:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Esportes'}
                find={false}
                data={esportes}
                handler_search={handler_search}
              ></Tasks>
            )
          case 5:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Outras'}
                find={false}
                data={outras}
                handler_search={handler_search}
              ></Tasks>
            )
          default:
            return (
              <Tasks
                onClick={() => setView(0)}
                toCreate={() => setView(2)}
                category={'Todos'}
                find={false}
                data={tarefas}
                handler_search={handler_search}
              ></Tasks>
            )
        }

      case 2:
        return <NewTask onClick={() => setView(0)}></NewTask>
      case 3:
        return (
          <Tasks
            onClick={() => setView(0)}
            toCreate={() => setView(2)}
            category={`Resultados de '${search}'`}
            find={true}
            data={[searchByName]}
            handler_search={handler_search}
          ></Tasks>
        )
      default:
        return <Home></Home>
    }
  }

  return <Start></Start>
}

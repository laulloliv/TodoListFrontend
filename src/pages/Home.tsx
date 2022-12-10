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
import { useState } from 'react'
import './style.css'
import { NewTask } from '../components/form/NewTask'
import { Tasks } from '../components/list'

export const View = () => {
  const [view, setView] = useState(0)

  const Home = () => {
    return (
      <div className="body-home">
        <Title
          text={'Minhas Tarefas'}
          children={<ListBullets size={32} />}
          isHome={true}
        />
        <Search toCreate={() => setView(2)}></Search>
        <div className="components-home">
          <BoxCategory
            className={'category-1'}
            text={'Todos'}
            item={'item-1'}
            children={<ClipboardText size={32} />}
            onClick={() => setView(1)}
          ></BoxCategory>
          <BoxCategory
            className={'category-2'}
            text={'Trabalho'}
            item={'item-2'}
            children={<SuitcaseSimple size={32} />}
          ></BoxCategory>
          <BoxCategory
            className={'category-3'}
            text={'Viagens'}
            item={'item-3'}
            children={<PaperPlaneTilt size={32} />}
          ></BoxCategory>
          <BoxCategory
            className={'category-4'}
            text={'Educação'}
            item={'item-4'}
            children={<GraduationCap size={32} />}
          ></BoxCategory>
          <BoxCategory
            className={'category-5'}
            text={'Esportes'}
            item={'item-5'}
            children={<Barbell size={32} />}
          ></BoxCategory>
          <BoxCategory
            className={'category-6'}
            text={'Outras'}
            item={'item-6'}
            children={<Hash size={32} />}
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
        return <Tasks onClick={() => setView(0)}></Tasks>
      case 2:
        return <NewTask onClick={() => setView(0)}></NewTask>
      default:
        return <Home></Home>
    }
  }

  return <Start></Start>
}

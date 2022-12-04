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
import './style.css'

export const Home = () => {
  return (
    <div className="body">
      <Title text={'Minhas Tarefas'} children={<ListBullets size={32} />} />
      <Search></Search>
      <div className="components">
        <BoxCategory
          className={'category-1'}
          text={'Todos'}
          item={'item-1'}
          children={<ClipboardText size={32} />}
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

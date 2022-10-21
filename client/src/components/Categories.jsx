import styled from 'styled-components'
import {categories} from '../data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({flexDirection:"column", padding:"0px"})}
`

const Categories = () => {
  return (
    <Container>
      {categories.map(categoryItem=>(
        <CategoryItem categoryItem={categoryItem} key={categoryItem.id}/>      
      ))}
    </Container>
  )
}

export default Categories

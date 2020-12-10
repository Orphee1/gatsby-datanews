import React from 'react'
import styled from "styled-components"


const Categories = ({categories, filterCategory}) => {
 
  return (
    <Wrapper>
      {categories.map((item, index) => {
return  <button type="button" key={index} 
onClick={() => {
  filterCategory(item)
}}
>{item}</button>    
      })}
 
    </Wrapper>
  )
}



export default Categories

const Wrapper = styled.div`
 margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  width: 90%; 
  margin: 0 auto;
  overflow-x: scroll;  
  button {
      background: transparent;
  border-color: transparent;
outline: none; 
  font-size: 1rem;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: var(--clr-black);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--radius);
  }
  button:hover {
  background: var(--clr-black);
  color: var(--clr-white);
}
 @media screen and (min-width: 768px) { 
 width: 100%; 

    }
`

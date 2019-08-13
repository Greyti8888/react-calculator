import React from 'react'
import styled from 'styled-components'

import Result from './Display/Result'
import Input from './Display/Input'

export default function Display (props) {
  return (
    <S.Display id='display'>
      <Result formula={props.formula}/>
      <Input input={props.input}/>
    </S.Display>
  )
}

const S = {}

S.Display = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  grid-area: display;
  color: white;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin: 1px;
  background-color: black;
`
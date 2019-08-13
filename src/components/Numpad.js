import React from 'react'
import styled from 'styled-components'

export default function Numpad (props) {
  return (
    keys.map((key, i) => {
      return (
        <S.Numpad
          id={keysId[key]}
          value={key}
          onClick={props.onClick}
          >
          {key}
        </S.Numpad>
      )
    })
  )
}

const S = {}

S.Numpad = styled.button`
  font-family: 'Orbitron', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  box-sizing: border-box;
  grid-area: ${props => props.id};
  color: white;
  background-color: black;
  border: none;
  margin: 1px;
`

const keys = [0, 1, 2 ,3 , 4, 5, 6, 7, 8, 9, '.', '/', '×', '-', '+', '=', 'AC']
const keysId = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '.': 'decimal',
  '/': 'divide',
  '×': 'multiply',
  '-': 'subtract',
  '+': 'add',
  '=': 'equals',
  'AC': 'clear',
}
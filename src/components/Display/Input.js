import React from 'react'
import styled from 'styled-components'

export default function Input (props) {
  return (
    <S.Input>
      {props.input}
    </S.Input>
  )
}

const S = {}

S.Input = styled.div`
  text-align: right;
  height: 1.5rem;
  padding: 0 5px 10px 5px;
`
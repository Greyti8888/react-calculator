import React from 'react'
import styled from 'styled-components'

export default function Result (props) {
  return (
    <S.Result>
      {props.formula}
    </S.Result>
  )
}

const S = {}

S.Result = styled.div`
  text-align: right;
  height: 1.5rem;
  padding: 5px 5px 5px 5px;
`
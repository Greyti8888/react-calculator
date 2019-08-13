import React from 'react'
import styled from 'styled-components'

import Display from './components/Display'
import Numpad from './components/Numpad'

export default class App extends React.Component {
  state = {
    input: '0',
    formula: [],
    prevVal: '0',
  }

  handleClick = (e) => {
    let key = e.target.value;
    let input = this.state.input;
    let formula = this.state.formula;
    let prevVal = this.state.prevVal;
    switch(key){
      case 'AC':
        this.setState({
          input: '0',
          formula: [],
          prevVal: '0'
        })
        break
      case '/':
      case '×':
      case '+':
      case '-':
        //Looking for unnecessary 0
        let extra0 = 0
        if (/\./.test(input) && prevVal !== '.') {
          for (let i = input.length - 1; i > input.indexOf('.'); i--) {
            if (input[i] !== '0') {
              break
            }
            extra0 += 1
            if (input[i - 1] === '.') {
              extra0 += 1
            }
          }
        }
        this.setState({
          input: '',
          formula: prevVal === '=' ? [...input, key] 
          : prevVal === '.' ? [...formula, input.slice(0, input.length - 1), key]
          : extra0 > 0 ? [formula, input.slice(0, input.length - extra0), key]
          : /[0-9]/.test(prevVal) ? [...formula, input, key]
          : /[/×+]/.test(formula[formula.length - 2]) ? [...formula.slice(0, formula.length - 2), key] 
          : key === '-' ? [...formula, key] 
          : [...formula.slice(0, formula.length - 1), key],
          prevVal: key
        })
        break
      case '.':
        if (!/\./.test(input)) {
          this.setState({
            input: /[/×\-+=]/.test(prevVal) ? '0' + key : input + key,
            prevVal: key
          })
          break
        }
        break
      case '=':
        this.setState({
            // eslint-disable-next-line
            input: (Math.round(eval(formula.concat(input).join('').replace('×','*')) * 10000) / 10000).toString(),
            formula: '',
            prevVal: key
          })
        break
      default:
        this.setState({
          input: /^[0\-+×/]$/.test(input) ? key : prevVal === '=' ? key : input + key,
          prevVal: key
        })
    }
  }
  
  render() {
    return(
      <S.Wrapper>
        <S.FancyBody>
          <S.Calculator>
            <Display 
              input={this.state.input}
              formula={this.state.formula}
              />
            <Numpad onClick={this.handleClick}/>
          </S.Calculator>
        </S.FancyBody>  
      </S.Wrapper>
    )
  }
}

const S = {}

S.Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

S.FancyBody = styled.div`
  padding: 55px 10px 10px 10px;
  background-color: green;
  border-radius: 2%;
`

S.Calculator = styled.div`
  display: grid;
  //height: 560px;
  width: 280px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "display display display display"
    "clear clear divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
  border: solid 1px;
`
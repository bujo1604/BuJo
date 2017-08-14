import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0;
`
export const Card = styled.div`
  border: 1px solid grey;
  width: ${props => props.login ? '350px' : '225px'};
  height: ${props => props.login ? '250px' : '325px'};
  padding: ${props => props.login ? '20px' : '0px'};
  margin: ${props => props.login ? '75px' : '20px'};
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
`
export const Title = styled.h1`
  font-size: ${props => props.secondary ? '25px' : '35px'};
  letter-spacing: 10px;
  font-family: 'Oswald', sans-serif;
  padding: 0 50px;
  color: ${props => props.secondary ? 'black' : 'white'};
`

export const FlexParent = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex-wrap: wrap;
  justify-content: ${props => props.center ? 'center' : 'space-around'};
`

export const WeekSty = styled.div`
 display: flex;
 height: 80px;
`
export const DaySty = styled.div`
 flex-grow: 1;
 background-color: blue;
 flex-shrink: 1;
 flex-basis: 0;
 color: #F98909;
 padding: 5px;
 background-color: transparentize(white, 0.30);
`

export const MonthSty = styled.div`
 max-width: 560px;
 margin: 20px auto;
`
export const TableH = styled.th`

 background-color: green;
 border: 1px solid black;
`




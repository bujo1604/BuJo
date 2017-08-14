import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

import React from 'react'
import styled from 'styled-components'

import './StyleExample.css'
import styles from './StyleExample.module.css'

const MyBtn = styled.a`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

class StyleExample extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <a className='my_btn'>button 1 (global css)</a>
        <a className={styles.my_btn}>button 2 (module css)</a>
        <MyBtn>button 3 (styled-component)</MyBtn>
      </div>
    )
  }
}

export default StyleExample

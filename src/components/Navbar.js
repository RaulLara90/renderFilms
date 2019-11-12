import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const P = styled.p`
  a {
    text-decoration: none;
  color: white;
  }
`

const Navbar = (props) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Flex>
          {props.children}
          <P>
            Movies app
          </P>
        </Flex>
      </Toolbar>
    </AppBar>
  )
}

export { Navbar }

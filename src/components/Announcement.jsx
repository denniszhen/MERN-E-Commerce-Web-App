import React from 'react'
import styled from "styled-components"

// Don't forget to make everything flexbox before trying to change its positon horizontally/vertically!
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcement = () => {
  return (
    <div>
        <Container>Get 30% off with code SPRING30</Container>
    </div>
  )
}

export default Announcement
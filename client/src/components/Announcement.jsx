import styled from "styled-components"


/* -----STYLED CSS START----- */
const Container = styled.div`
    height: 30px;
    background-color:teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`



/* -----STYLED CSS END----- */
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement

import styled from "styled-components";

const Titulo = styled.h1`
font-family: "DM Serif Text", serif;
font-weight: bolder;
font-style: normal;
font-size: 25px;
color: #2B2D42;
`
const Descricao = styled.p`
font-family: "Moderustic", sans-serif;
font-size: 20px;
padding-left: 40px;
color: #8E7C93;
`
const Background = styled.section`
background-color: #F8F7F9;
display: flex;
margin: 0px;
justify-content: center;
align-items: center;
`

function Navbar(){
    return(
        <Background>
            <Titulo>PAINT THE TOWN</Titulo>
            <Descricao>Tintas e produtos de arte</Descricao>
        </Background>
        
    )
}

export default Navbar;
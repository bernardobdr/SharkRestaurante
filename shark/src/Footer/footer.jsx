import React from 'react'
import styled from 'styled-components';

const Rodape = styled.div`

background-color: black;
display: flex;
justify-content: center;
align-items: center;
color: white;
padding-top: 20px;


p:hover{
    color: #d5c06b;
    font-weight:600;
}
`

const Footer = () => {
  return (
    <Rodape>
        
        <p>@2022 SharkTeam | Projeto Desenvolvido para fins educacionais.</p>
        
        </Rodape>
  )
}

export default Footer;
import React from 'react'
import '../../App.css';
import styled from 'styled-components'
import logo from '../../assets/Imagens-Home/logo-header.svg'


const Head = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 2px 22px;
 font-size: 1.2rem;
 flex-wrap:wrap;
 height: 120px;
 background-color: black;




img{
  width: 100px;
  height: 100px;

}

 nav ul{
   display:flex;
 }

 nav ul li{
  list-style:none;
  margin-left:10px;
}

nav li a{
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  align-items: center;
  border-bottom: 5px solid black;
  font-weight: 600; 
}

 a{
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  border-bottom: 3px solid #d5c06b;
  color:#d5c06b;

}


`

function Header(){
  return (
    
<Head>
       <a href="/"><img src={logo} alt="" /></a> 
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="#pratos">Cardápio</a></li>
          </ul>
        </nav>
      </Head>
  )
}

export default Header;
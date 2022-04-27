import React from 'react'
import'../../App.css'
//import '../../App.css';
import styled from 'styled-components'
import cheff from '../../assets/Imagens-Home/chefe-de-cozinha.svg'
import cozinhado from '../../assets/Imagens-Home/cozinhando.svg'
import cardapio  from '../../assets/Imagens-Home/confira-nosso-cardápio.svg'
import Footer from '../../Footer/footer'
import Header from '../../components/Header/header'


const  Secao = styled.section`
 background:#000000;
 color: white;
 display:flex;
 justify-content: center;
 align-items: center;


 .div-image{
    background:#fff;
    border-radius: 20px;
    margin: 5px 20px;
 }

.image{
    height: 500px;
    padding: 7px 7px;
    border-radius: 30px;
}

.div-p{
    width:420px;
    background:#fff;
    color: black;
    padding: 15px;
    border-radius: 2%;
}

.div-p h3 {
    font-size: 30px;
    text-align: center;
}

`
const Chef = styled.section`
 background-image: url(${cheff});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 width:auto;
 height: 750px;

 h1{
     color: red;
 }

 .nome-chef{
    display: block;
   
    left: 10%;
    margin-left: 80px;
    padding: 25px 23px;
 }

 .nome-chef span {
    // text-decoration: underline;
    text-transform: uppercase;
    border-bottom: 7px solid #d5c06b;
    color: #d5c06b;
    font-weight: 700;
    font-size: 2em;
 }

 .nome-chef h3 {
    text-transform: uppercase;
    margin: 10px 0 0;
    color: #ffffff;
    font-size: 4em;
    font-weight: 300;
 }

 .descricao{
    top: initial;
    bottom: 80px;
    right: 50%;
    width: 320px;
    margin-right: -590px;
    position: absolute;
 }


 .descricao p{
    background:#000000;
    padding:30px;
    color: #ffffff;
    font-size: 0.9em;
    line-height: 24px;
    font-weight: 300;
 }

 .descricao a{
    margin: auto;
    width: 80%;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    font-size: 16px;
    border: 3px solid #ffffff;
    -webkit-transition: border ease 0.3s;
    transition: border ease 0.3s;
    outline: none;
    cursor: pointer;
    font-weight: 400;
    background: gray;
}
 }


 .descricao a:hover{
    color: #d5c06b;
    font-weight: 700;
 }

 .descricao p:hover{
    color: #d5c06b;
 }
`





const Container = styled.div`


section{
background-image: url(${cardapio});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width:100%;
height: 550px;
opacity: 1.0;
}


section div{
    text-transform: uppercase;
    color:#fff;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 350px;
    
}


section div h1{
    width: 867px;
    height: 90px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
   // border: 3px solid #ffffff;
    
 }

 section div h1:hover{
   //color: #D1BF74;
   //border: 3px solid #D1BF74;
   box-shadow: 1px 1px 4px 6px #D1BF74; 

 }

 section div a{
    width: 169px;
    height: 55px;
    background: #162728;
    border: 1px solid #000000;
    color:#fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    padding:14px;
    border-radius: 8px;
   margin-top:15px;
 }

 section div a:hover{
    color: #D1BF74;
 }





`

const Div = styled.div`
background:#000000;
padding-top: 10px;
display:flex;
align-items:center;
justify-content: center;



.sobre{
    background: #D1BF74;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:20px 10px;
    width: 90%;
    height: 444px;
    font-family: 'Roboto', sans-serif;
    font-weight:700;
    font-size: 18px;
    line-height: 23px;
}



`


function Home(){
  return (

  <div id='home'>

      <Header/>

<div>
    <Chef>

        <div className='nome-chef'>
            <span>CHEF</span>
            <h3>JUNIOR <br />
            <b>DURSKI</b>
            </h3>
        </div>

        <div className='descricao'>
            <p>O Chef Junior Durski viajou por diversos países e criou o Madero para você. Tudo isso para realizar um sonho: criar o melhor cheeseburger do mundo.</p>

            <a href="/">Conheça nossa história</a>
        </div>
        {/* <img src={cheff} alt="chefe-cozinha" />
        <span>CHEF</span> */}
    </Chef>
</div>

      <div>
          <Secao>

              <div className='div-image'>
                    <img className='image' src={cozinhado} alt="mulher-cozinhando" />
              </div>

              <div className='div-p'>
                  <h3>Shark T11</h3>
                  <div>
                      <p>Reinventando a culinária Japonesa e Contemporânea em um espaço aconchegante na beira da Praia de Copacabana, umas das mais famosas do mundo.</p>
                  </div>
              </div>

          </Secao>
      </div>


<Container id='pratos'>
    
<section>


<div>
<h1>Confira nosso cardápio</h1>
      <a href="/">cardápio</a>
</div>

</section>
</Container>


<Div>

    <div className='sobre'>

        <div>
        <p>Horario de Funcionamento:</p>
             <span>Segunda a Quinta: 12h a 23h30</span><br />
             <span>Sexta e Sábado: 12h a 00h30</span><br />
             <span>Domingo: 12h a 23h</span>
        </div>

        <div>
            <span>Avenida Atlântica, 4240 – Copacabana</span>
        </div>

        <div>
            <span>Reservas:</span><br />
            <span>+55 (21) 99422-1586</span>
        </div>
            

    </div>



</Div>

<div>

<Footer/>

</div>



</div>

  )
}

export default Home;
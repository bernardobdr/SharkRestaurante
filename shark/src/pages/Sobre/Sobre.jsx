import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../Footer/footer'
import intro from '../../assets/Imagens-Sobre/introdução-sobre.svg'
import sobre from '../../assets/Imagens-Sobre/imagem-sobre.svg'
import missao from '../../assets/Imagens-Sobre/imagem-missão.svg'
import visao from '../../assets/Imagens-Sobre/imagem-visão.svg'
import valores from '../../assets/Imagens-Sobre/imagem-valores.svg'
import styled from 'styled-components'

const Estilos = styled.section`
background-image:url(${intro});
background-repeat: no-repeat;  
background-position:center;  
width: auto;  
height: 600px;
`



const Sobre = () => {
  return (
    <main className='pai'>
        <header><Header/></header>
        <div>
            <Estilos>   
                <h1>SB Restaurante</h1>
            </Estilos>
        </div>
        <section>
                <h1>Sobre</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consequatur ut autem quis. Repudiandae soluta sed explicabo est ea quaerat placeat fugit voluptatum, totam maiores nemo quam mollitia cum vitae!</p>
        </section>
            <img src={sobre}/>
            <section>
                <h1>Missao</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consequatur ut autem quis. Repudiandae soluta sed explicabo est ea quaerat placeat fugit voluptatum, totam maiores nemo quam mollitia cum vitae!</p>
                <img src={missao}/>
            </section>
            <section>
                <h1>Visão</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consequatur ut autem quis. Repudiandae soluta sed explicabo est ea quaerat placeat fugit voluptatum, totam maiores nemo quam mollitia cum vitae!</p>
                <img src={visao}/>
            </section>
            <section>
                <h1>Valores</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consequatur ut autem quis. Repudiandae soluta sed explicabo est ea quaerat placeat fugit voluptatum, totam maiores nemo quam mollitia cum vitae!</p>
                <img src={valores}/>
            </section>






        <div>   
            <Footer/>
        </div>
    </main>
  )
}

export default Sobre
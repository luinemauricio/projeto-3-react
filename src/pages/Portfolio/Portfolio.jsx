import { useState, useEffect} from 'react'
import Header from "../../componentes/Header/Header"
import image from "../../assets/undraw_project_complete_lwss.svg"
import Footer from "../../componentes/Footer/Footer"
import {BsArrowReturnRight} from 'react-icons/bs'
import axios from "axios"
import './portfolio.css'

const list = [
    {
      id: 1,
      nome: 'Projeto M de maravilhosa',
      descricao: 'Um site feito para contar a história de Maria Felipa.',
      conteudo: 'Feito com html, css e js.',
      imagem: 'https://media.giphy.com/media/8erAfUSAYW20wT1i20/giphy.gif',
      link: 'https://projeto-mmaravilhosa-mariafelipa.netlify.app/'
    },
    {
      id: 2,
      nome: 'Meu diário Reprograma',
      descricao: 'Uma aplicação em react',
      conteudo: 'React hooks e testar os componente com testing library.',
      imagem: 'https://media.giphy.com/media/wgqGZJm7NMjDpT5qXm/giphy-downsized-large.gif',
      link: 'https://meudiarioreprograma-luine.netlify.app/'
    }    
  ]

  function Portfolio() {
    const [repos, setRepos] = useState([])
    const baseURL = "https://api.github.com/users/luinemauricio/repos"
  
    useEffect(()=> {
      axios
        .get(baseURL)
        .then((response) => setRepos(response.data))
    }, [])
  
    return(
     <>
      <Header 
        image={image} 
        deion="ilustracao mulher com site"
      >
        Meus Projetos
      </Header>
  
      <div className="cartao-container">
        {
          list.map(projeto => {
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.nome}</h1>
                <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#111"/> 		
                </a>
              </div>
            )
          })
        }
      </div>
      <h2 className="titulo">Outros Projetos no meu Github</h2>  
      <div className="card-container">
        {
          repos.map(repo => {
            return(
              <div className="card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.deion}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#fff"/>
                </a>
              </div>
            )
          })
        }
      </div>
     </>
    )
   }
   
   export default Portfolio
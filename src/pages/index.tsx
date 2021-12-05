import type { NextPage } from 'next'
import { ContainerStyle } from '../styles/global'
import { HomeStyle } from '../styles/pages/Home'
import Head from 'next/head'
import InitialPage from '../pages/components/InitialPage'
import axios from 'axios'
import router from 'next/router'
import Swal  from 'sweetalert2'
import { status } from 'msw/lib/types/context'


const Home: NextPage = () => {

  const handleForm = async (e: any) => {
    e.preventDefault()
    const {email, password} = e.target
    await axios.post('http://localhost:3333/login', {
      headers: "Content-Type: application/json",
      data: {
        email: email.value,
        password: password.value
      }
    }).then((response) => {
      if (response.status === 200) {
        localStorage.setItem('idUser',  response.data.id)
        if(response.data.type === "client") {
          Swal.fire('Usuário logado com sucesso!')
          router.push('/registro-pet')
        }
        else if (response.data.type === "admin") {
          Swal.fire('Usuário logado com sucesso!')
          router.push('/gerenciar-consulta')
        } else {
          Swal.fire('Usuário não encontrado')
        }
      }
    })
  }

  return (
  <div>
    <Head>
      <title>Seja bem vindo - ANUBIS PET</title>
    </Head>
    <>
      <InitialPage/>,
      <ContainerStyle>
        <HomeStyle>
          <h1>Faça seu login</h1>
          <form className="content-form" method="post" onSubmit={handleForm}>
            <div className="content-adjustment">
              <input type="text" placeholder="E-mail" name="email" required/>
              <input type="text" placeholder="Senha" name="password" required/>
              <button type="submit">Entrar</button>
              <a href="/cadastro"><p>Não tem cadastro?</p></a>
            </div>
          </form>
        </HomeStyle>
      </ContainerStyle>
    </>
  </div>
  )
}

export default Home

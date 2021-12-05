import { ContainerStyle } from '../../styles/global'
import { HomeStyle } from '../../styles/pages/Home'
import InitialPage from '../components/InitialPage'
import axios from 'axios'
import router from 'next/router'
import Swal from 'sweetalert2'


export default function RegisterUser() {
  const handleForm = async (e: any) => {
    e.preventDefault()
    const {name, email, password} = e.target
    await axios.post('http://localhost:3333/createUser', {
      headers: "Content-Type: application/json",
      data: {
        name: name.value,
        email: email.value,
        password: password.value,
        type: "client"
      }
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire('Cadastro realizado com sucesso!')
        router.push('/')
      } else {
        Swal.fire('Erro ao realizar cadastro!')
      }
    })
  }

  return (
    <>
      <InitialPage/>,
      <ContainerStyle>
        <HomeStyle>
          <h1>Cadastre-se</h1>
          <form className="content-form" method="post" onSubmit={handleForm}>
            <div className="content-adjustment">
              <input type="text" placeholder="Nome" name="name"/>
              <input type="text" placeholder="E-mail" name="email"/>
              <input type="text" placeholder="Senha" name="password"/>
              <button type="submit">Cadastrar</button>
              <a href="/"><p>Fazer login</p></a>
            </div>
          </form>
        </HomeStyle>
      </ContainerStyle>
    </>
  )
}


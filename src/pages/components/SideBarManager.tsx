import { SideBarStyle } from "../../styles/components/SideBar";
import { FiLogOut } from "react-icons/fi"
import PhotoPerfil from "../../assets/photo-perfil.svg"

export default function SideBar() {
  return(
      <SideBarStyle>
        <h1>NUBIS PET</h1>
        <a href="/">
          <PhotoPerfil />
        </a>
        <div className="content-sidebar">

          <p>Bem Vindo,  Sr(a). Gerente</p>
          <hr />
          <a href="gerenciar_funcionario">
            <p>Gerenciar Funcionarios</p>
          </a>
          <hr />
          <a href="#">
            <p>Gerenciar clientes</p>
          </a>
          <hr />
          <a href="#">
            <p>Verificar Estoque</p>
          </a>
          <hr />
          <a href="atendimento">
            <p>Atendimento</p>
          </a>
          <hr />
        </div>
        <FiLogOut size={64} color="#111"/>
      </SideBarStyle>
  )
}


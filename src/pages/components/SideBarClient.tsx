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

          <p>Bem Vindo,  Sr(a). Nome</p>
          <hr />
          <a href="registro_pet">
            <p>Registrar Pet</p>
          </a>
          <hr />
          <a href="marcar_banho_tosa">
            <p>Marcar Banho e Tosa</p>
          </a>
          <hr />
          <a href="marcar_vacina">
            <p>Marcar Vacina</p>
          </a>
          <hr />
          <a href="calendario">
            <p>Calendário</p>
          </a>
          <hr />
          <a href="agendar_consulta">
            <p>Agendar Consulta</p>
          </a>
        </div>
        <FiLogOut size={64} color="#111"/>
      </SideBarStyle>
  )
}


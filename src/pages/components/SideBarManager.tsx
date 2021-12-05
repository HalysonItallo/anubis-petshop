import { SideBarStyle } from "../../styles/components/SideBar";
import { FiLogOut } from "react-icons/fi"
import PhotoPerfil from "../../assets/photo-perfil.svg"
import router from "next/router";

export default function SideBar() {

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  }

  return(
      <SideBarStyle>
        <h1>NUBIS PET</h1>
        <a href="/">
          <PhotoPerfil />
        </a>
        <div className="content-sidebar">

          <p>Bem Vindo,  Sr(a). Gerente</p>
          <hr />
          <a href="gerenciar-consulta">
            <p>Gerenciar Consulta</p>
          </a>
          <hr />
        </div>
        <button onClick={handleLogout}>
          <FiLogOut size={64} color="#111"/>
        </button>
      </SideBarStyle>
  )
}


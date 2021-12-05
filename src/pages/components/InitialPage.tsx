import { InitialPageStyle } from "../../styles/components/InitialPage";
import PhotoPerfil from "../../assets/photo-perfil.svg"

export default function InitialPage() {
  return(
      <InitialPageStyle>
        <div className="content-adjustment">
          <h1>NUBIS PET</h1>
          <div className="content-image">
            <a href="/">
              <PhotoPerfil />
            </a>
          </div>
          <p>O petshop que seu animal se sente em casa</p>
        </div>
      </InitialPageStyle>
  )
}


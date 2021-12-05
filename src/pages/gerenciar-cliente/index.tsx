import SideBar  from "../components/SideBarManager"
import { ContainerStyle } from "../../styles/global"
import { ManagerClientStyle } from "../../styles/pages/ManagerClient"

export default function ManagerClient() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <ManagerClientStyle>
          <h1>Gerenciar Cliente</h1>
          <div className="content-form">
            <div className="show-content">
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Kirito</p>
                <a href=""><p>Verificar</p></a>
              </div>
            </div>
          </div>
        </ManagerClientStyle>
      </ContainerStyle>
    </>
  )
}


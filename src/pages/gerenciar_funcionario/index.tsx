import SideBar  from "../components/SideBarManager"
import { ContainerStyle } from "../../styles/global"
import { ManagerEmployeeStyle } from "../../styles/pages/ManagerEmployee"

export default function ManagerEmployee() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <ManagerEmployeeStyle>
          <h1>Gerenciar Funcionários</h1>
          <button>Adicionar</button>
          <div className="content-form">
            <div className="show-content">
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Verificar</p></a>
              </div>
              <a href=""><p>Pag 1</p></a>
            </div>
          </div>
        </ManagerEmployeeStyle>
      </ContainerStyle>
    </>
  )
}


import SideBar  from "../components/SideBarManager"
import { ContainerStyle } from "../../styles/global"
import { AttendanceStyle } from "../../styles/pages/Attendance"

export default function Attendance() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <AttendanceStyle>
          <h1>Atendimento</h1>
          <div className="content-form">
            <div className="show-content">
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Formulário</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Formulário</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Formulário</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Formulário</p></a>
              </div>
              <div className="itens-show">
                <p>Dr.(a) Dolittle</p>
                <a href=""><p>Formulário</p></a>
              </div>
              <a href=""><p>Pag 1</p></a>
            </div>
          </div>
        </AttendanceStyle>
      </ContainerStyle>
    </>
  )
}


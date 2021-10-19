import SideBar  from "../components/SideBar"
import { ContainerStyle, SelectStyle } from "../../styles/global"
import { CalendarStyle } from "../../styles/pages/Calendar"

export default function Calendar() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <CalendarStyle>
          <h1>Calendário</h1>
          <div className="content-form">
            <SelectStyle id="first-input">
                <option value="Pet1">Pet 1</option>
                <option value="Pet2">Pet 2</option>
                <option value="Pet3">Pet 3</option>
            </SelectStyle>
            <div className="show-calendar">
              <div className="itens-show-calendar">
                <p>Consulta Marcada</p>
                <p>01/09/2021</p>
                <p>14:00</p>
                <p>Avenida 1</p>
              </div>
              <div className="itens-show-calendar">
                <p>Consulta Marcada</p>
                <p>01/09/2021</p>
                <p>14:00</p>
                <p>Avenida 1</p>
              </div>
              <div className="itens-show-calendar">
                <p>Consulta Marcada</p>
                <p>01/09/2021</p>
                <p>14:00</p>
                <p>Avenida 1</p>
              </div>
            </div>
          </div>
        </CalendarStyle>
      </ContainerStyle>
    </>
  )
}


import SideBar  from "../components/SideBar"
import { ContainerStyle, SelectStyle } from "../../styles/global"
import { ScheduleAppointmentStyle } from "../../styles/pages/ScheduleAppointment"

export default function ScheduleAppointment() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <ScheduleAppointmentStyle>
          <h1>Agendar Consulta</h1>
          <div className="content-form">
            <SelectStyle id="first-input">
                <option value="" hidden>
                  Selecione o seu pet
                </option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Rato">Rato</option>
              </SelectStyle>
            <SelectStyle>
                <option value="" hidden>
                  Marcar Data
                </option>
                <option value="Date1">20/10/2021</option>
                <option value="Date2">21/10/2021</option>
                <option value="Date3">22/10/2021</option>
              </SelectStyle>
            <SelectStyle>
                <option value="" hidden>
                  Marcar Horário
                </option>
                <option value="Hour1">11:30</option>
                <option value="Hour2">12:00</option>
                <option value="Hour3">12:30</option>
              </SelectStyle>
            <SelectStyle>
                <option value="" hidden>
                  Marcar local
                </option>
                <option value="Adress1">Avenida 1</option>
                <option value="Adress2">Avenida 2</option>
                <option value="Adress3">Avenida 3</option>
              </SelectStyle>
              <SelectStyle>
                <option value="" hidden>
                  Tipo Consulta
                </option>
                <option value="Appointment1">Consulta 1</option>
                <option value="Appointment2">Consulta 2</option>
                <option value="Appointment3">Consulta 3</option>
              </SelectStyle>
            <button>Confirmar</button>
          </div>
        </ScheduleAppointmentStyle>
      </ContainerStyle>
    </>
  )
}


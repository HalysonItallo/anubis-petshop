import SideBar  from "../components/SideBarManager"
import { ContainerStyle } from "../../styles/global"
import { ManagerAppointmentStyle } from "../../styles/pages/ManagerAppointment"
import { useEffect, useState } from "react"
import axios from "axios"
import Appointment from "../../data/Appointments"

type Appointment = {
  id: string,
  idAnimal: string,
  hour: string,
  date: string,
  idClient: string,
  appointment: string,
  adress: string,
  status: string
}

export default function ManagerAppointment() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    axios.get("http://localhost:3333/getAllAppointments", {
      headers: {"Content-Type": "application/json"}
    }).then(res => setAppointments(res.data))
  },[])

  const handleAcceptAppointment = (id: string) => {
    axios.get(`http://localhost:3333/setAcceptAppointment/${id}`, {
      headers: {"Content-Type": "application/json"}
    })
    window.location.reload()
  }

  const handleRejectAppointment = (id: string) => {
    axios.get(`http://localhost:3333/setRejectAppointment/${id}`, {
      headers: {"Content-Type": "application/json"}
    })
    window.location.reload()
  }

  const hasWait = () => {
    return appointments.filter(appointment => appointment.status === "wait")
  }

  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <ManagerAppointmentStyle>
          <h1>Gerenciar Consulta</h1>
          <div className="content-form">
            <div className="show-content">
              {hasWait().length > 1 ? appointments.map((appointment: Appointment) => {
                if(appointment.status === "wait") {
                  return(
                  <div className="itens-show" key={appointment.id}>
                    <p>{appointment.status}</p>
                    <div>
                      <button className="item-button accept" onClick={() =>
                        handleAcceptAppointment(appointment.id)
                      }><p>aceitar</p></button>
                      <button className="item-button reject" onClick={ () =>
                        handleRejectAppointment(appointment.id)
                      }><p>recusar</p></button>
                    </div>
                  </div>
                  )
                }
              }
              ) : <p>Não há consultas no momento</p>}
            </div>
          </div>
        </ManagerAppointmentStyle>
      </ContainerStyle>
    </>
  )
}


import SideBar  from "../components/SideBarClient"
import { ContainerStyle, SelectStyle } from "../../styles/global"
import { ScheduleAppointmentStyle } from "../../styles/pages/ScheduleAppointment"
import axios from "axios"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"

type Animals ={
  id: number,
  name: string,
}

export default function ScheduleAppointment() {

  const [animals, setAniamls] = useState<Animals[]>([])

  useEffect(() => {
    const idUser = localStorage.getItem('idUser')

    axios.get(`http://localhost:3333/getAllPetsForOwner/${idUser}`,{
      headers: {"Content-Type": "application/json" },
     }).then(res => setAniamls(res.data))
  }, [])

  const handleForm = (e: any) => {
    e.preventDefault()
    const {animal, date, hour, adress,
      appointment} = e.target
    axios.post('http://localhost:3333/createAppointment', {
      headers: "Content-Type: application/json",
      data: {
        idAnimal: animal.value,
        idClient: localStorage.getItem('idUser'),
        date: date.value,
        hour: hour.value,
        adress: adress.value,
        appointment: appointment.value,
      }
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire('Agendamento realizado com sucesso!')
      } else {
        Swal.fire('Erro ao realizar agendamento!')
      }
    })
    window.location.reload()
  }

  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <ScheduleAppointmentStyle>
          <h1>Agendar Consulta</h1>
          <form className="content-form" method="post" onSubmit={handleForm}>
            <SelectStyle id="first-input" name="animal">
                <option value="" hidden>
                  Selecione o seu pet
                </option>
                {animals.map((type: Animals) =>
                  <option key={type.id}
                  value={type.id}>{type.name}</option>
                )}
              </SelectStyle>
            <input type="date" name="date"/>
            <input type="time" name="hour" defaultValue="00:00" />
            <input type="text" name="adress" placeholder="Indique o local da consulta"/>
            <input type="text" name="appointment" placeholder="Insira a consulta desejada"/>
            <button type="submit">Confirmar</button>
          </form>
        </ScheduleAppointmentStyle>
      </ContainerStyle>
    </>
  )
}

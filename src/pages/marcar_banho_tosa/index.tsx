import SideBar  from "../components/SideBar"
import { ContainerStyle, SelectStyle } from "../../styles/global"
import { MarkBathCleaningStyle } from "../../styles/pages/MarkBathCleaning"

export default function MarkBathCleaning() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <MarkBathCleaningStyle>
          <h1>Marcar Banho e Tosa</h1>
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
            <button>Confirmar</button>
          </div>
        </MarkBathCleaningStyle>
      </ContainerStyle>
    </>
  )
}


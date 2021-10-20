import SideBar  from "../components/SideBarClient"
import { ContainerStyle, SelectStyle } from "../../styles/global"

export default function RegisterPet() {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
      <h1>Registre seu Pet</h1>
          <div className="content-form">
            <input type="text" placeholder="Nome" id="first-input"/>
            <div className="content-adjustment">
              <SelectStyle>
                <option value="" hidden>
                  Tipo
                </option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Rato">Rato</option>
              </SelectStyle>
              <SelectStyle>
                <option value="" hidden>
                  Raça
                </option>
                <option value="Vira-lata">Vira-lata</option>
                <option value="Fila-brasileiro">Fila-brasileiro</option>
                <option value="Pastor-alemão">Pastor-alemão</option>
              </SelectStyle>
            </div>
            <div className="content-adjustment">
              <input type="text" placeholder="Tamanho"/>
              <input type="text" placeholder="Peso"/>
            </div>
            <div className="content-adjustment">
              <input type="text" placeholder="Data de nascimento"/>

              <SelectStyle>
                <option value="" hidden>
                  Gênero
                </option>
                <option value="Fêmea">Fêmea</option>
                <option value="Macho">Macho</option>
              </SelectStyle>
            </div>
            <div className="content-adjustment">
              <input type="text" placeholder="Nacionalidade"/>
              <input type="text" placeholder="Cor"/>
            </div>
            <button>Confirmar</button>
          </div>
      </ContainerStyle>
    </>
  )
}


import SideBar  from "../components/SideBarClient"
import { ContainerStyle, SelectStyle } from "../../styles/global"
import { MarkVaccineStyle } from "../../styles/pages/MarkVaccine"

interface ITypes {
  id: number;
  type: string;
}

interface IDate {
  id: number;
  date: string;
}

interface IHour {
  id: number;
  hour: string;
}

interface IAdress {
  id: number;
  adress: string;
}

interface IVaccine {
  id: number;
  vaccine: string;
}

export default function MarkVaccine({typesAnimals = [],
  Dates = [], Hours = [], Adress = [], Vaccines = []}) {
  return(
    <>
      <SideBar />,
      <ContainerStyle>
        <MarkVaccineStyle>
          <h1>Marcar Vacina</h1>
          <div className="content-form">
            <SelectStyle id="first-input">
                <option value="" hidden>
                  Selecione o seu pet
                </option>
                {typesAnimals.map((type: ITypes) =>
                  <option key={type.id}
                  value={type.type}>{type.type}</option>
                )}
              </SelectStyle>
            <SelectStyle>
                <option value="" hidden>
                  Marcar Data
                </option>
                {Dates.map((type: IDate) =>
                  <option key={type.id}
                  value={type.date}>{type.date}</option>
                )}
              </SelectStyle>
            <SelectStyle>
                <option value="" hidden>
                  Marcar Horário
                </option>
                {Hours.map((type: IHour) =>
                  <option key={type.id}
                  value={type.hour}>{type.hour}</option>
                )}
              </SelectStyle>
            <SelectStyle>
                <option value="" hidden>
                  Marcar local
                </option>
                {Adress.map((type: IAdress) =>
                  <option key={type.id}
                  value={type.adress}>{type.adress}</option>
                )}
              </SelectStyle>
              <SelectStyle>
                <option value="" hidden>
                  Selecionar Vacina
                </option>
                {Vaccines.map((type: IVaccine) =>
                  <option key={type.id}
                  value={type.vaccine}>{type.vaccine}</option>
                )}
              </SelectStyle>
            <button>Confirmar</button>
          </div>
        </MarkVaccineStyle>
      </ContainerStyle>
    </>
  )
}

export async function getServerSideProps() {
  const reqTypeAnimals = await fetch("https://backend.dev/typesAnimals");
  const typesAnimals = await reqTypeAnimals.json();

  const reqDates = await fetch("https://backend.dev/dates");
  const Dates = await reqDates.json();

  const reqHours = await fetch("https://backend.dev/hours");
  const Hours = await reqHours.json();

  const reqAdress = await fetch("https://backend.dev/adress");
  const Adress = await reqAdress.json();

  const reqVaccine = await fetch("https://backend.dev/vaccines");
  const Vaccines = await reqVaccine.json();

  return {
    props: {
      typesAnimals,
      Dates,
      Hours,
      Adress,
      Vaccines
    },
  };
}



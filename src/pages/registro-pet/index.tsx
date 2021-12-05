import SideBar  from "../components/SideBarClient"
import { ContainerStyle, SelectStyle } from "../../styles/global"
import axios from "axios"
import Swal from "sweetalert2"

export default function RegisterPet() {

  const handleForm = async (e: any) => {
    e.preventDefault()
    const {name, typeAnimals, height, weight,
      birthday, gender, color, age} = e.target

      await axios.post('http://localhost:3333/registerPet', {
        headers: "Content-Type: application/json",
        data: {
          name: name.value,
          typeAnimals: typeAnimals.value,
          height: height.value,
          weight: weight.value,
          birthday: birthday.value,
          gender: gender.value,
          color: color.value,
          age: age.value,
          idOwner: localStorage.getItem('idUser')
        }
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire('Pet cadastrado com sucesso!')
      } else {
        Swal.fire('Ocorreu um erro ao cadastrar o pet!')
      }
    })
    window.location.reload()
  }

  return(
    <>
      <SideBar />,
      <ContainerStyle>
      <h1>Registre seu Pet</h1>
          <form method="post" className="content-form" onSubmit={handleForm}>
            <input type="text" placeholder="Nome" id="first-input" name="name"/>
            <div className="content-adjustment">
              <input type="text" placeholder="Tipo de animal" name="typeAnimals"/>
              <input type="text" placeholder="Raça" name="breed"/>
            </div>
            <div className="content-adjustment">
              <input type="text" placeholder="Altura" name="height"/>
              <input type="text" placeholder="Peso" name="weight"/>
            </div>
            <div className="content-adjustment">
              <input type="date" placeholder="Data de nascimento" name="birthday"/>
              <SelectStyle name="gender">
                <option value="" hidden>
                  Gênero
                </option>
                <option value="Fêmea">Fêmea</option>
                <option value="Macho">Macho</option>
              </SelectStyle>
            </div>
            <div className="content-adjustment">
              <input type="text" placeholder="Cor" name="color"/>
              <input type="text" placeholder="Idade" name="age"/>
            </div>
            <button type="submit">Confirmar</button>
          </form>
      </ContainerStyle>
    </>
  )
}


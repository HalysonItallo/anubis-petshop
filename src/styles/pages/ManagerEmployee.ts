import styled from 'styled-components'

export const ManagerEmployeeStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .content-form {
    align-items: flex-start;
    justify-content: space-around;
    min-width: 800px;
  }

  .show-content  {
    background-color: red;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    background-color: #C4C4C4;
    border-radius: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .itens-show {
    background-color: ${props => props.theme.colors.background};
    padding: 10px;
    border-radius: 15px;
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  button {
    width: 40%;
  }
`

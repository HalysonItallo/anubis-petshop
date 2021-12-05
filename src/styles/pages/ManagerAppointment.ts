import styled from 'styled-components'

export const ManagerAppointmentStyle = styled.div`
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
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
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
    align-items: baseline;
  }

  .item-button {
    text-decoration: none;
  }

  .accept {
    color: #4AA96C;
  }

  .reject {
    color: #FF0000;
  }

  button {
    background-color: transparent;
    width: 100px;
    height: 40px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  h1 {
    margin-bottom: 20px;
  }
`

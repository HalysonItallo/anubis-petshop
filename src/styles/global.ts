import styled,{ createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.colorText};
    font: 400 16px Roboto, sans-serif;
    width: 100%;
    height: 100vh;
  }
`

export const ContainerStyle = styled.div`
  height: 100%;
  width: calc(100% - 300px);
  min-width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 60px;
    color: ${props => props.theme.colors.colorText};
  }

  .content-form {
    display: flex;
    flex-direction: column;
    min-width: 500px;
    min-height: 400px;
    padding: 2rem;
    margin-top: 20px;
    align-items: center;
  }

  .content-form input {
    background-color: #C4C4C4;
    border: none;
    border-radius: 15px;
    padding: 10px;
    width: 180px;
  }

  .content-form #first-input {
    width: 100%;
  }

  .content-form input::placeholder {
   color: #111;
  }

  .content-adjustment{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
  }

  button {
    width: 200px;
    height: 40px;
    border-radius: 15px;
    border: none;
    padding: 10px;
    background-color: #C4C4C4;
    margin-top: 25px;
  }
`

export const SelectStyle = styled.select`
  min-width: 185px;
  border-radius: 15px;
  border: none;
  background-color: #C4C4C4;
  padding: 10px;
  color: ${props => props.theme.colors.colorText};

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`


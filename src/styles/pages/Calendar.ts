import styled from 'styled-components'

export const CalendarStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .content-form {
    align-items: flex-start;
    justify-content: space-around;
    min-width: 800px;
  }

  .show-calendar  {
    background-color: red;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    background-color: #C4C4C4;
    border-radius: 15px;
    height: 100%;
  }

  .itens-show-calendar {
    background-color: ${props => props.theme.colors.background};
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
  }
`

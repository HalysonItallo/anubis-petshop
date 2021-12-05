import styled from 'styled-components'

export const DialogBoxStyle = styled.nav`
  min-width: 600px;
  min-height: 350px;
  background-color: #E1D6D6;
  position: absolute;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .icon-dialog-box {
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    align-self: end;
    margin: 10px 10px 0px 0px;
    background-color: #F5F4F4;
    border-radius: 5px;
  }

  .name-product {
    display: flex;
    justify-content: center;
    font-weight: bolder;
  }

  .content-icon-dialog-box {
    color: #F21818;
    width: 100%;
    height: 100%;
  }

  .content-dialog-box {
    min-height: 150px;
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    justify-content: space-around;
    font-size: 18px;
  }

  .div-content-dialog-box {
    background-color: #F5F4F4;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
  }
`

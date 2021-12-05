import styled from 'styled-components'

export const InitialPageStyle = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width: 300px;
  width: 45%;
  color: #000;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  .content-adjustment {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
  }

  p{
    font-size: 1.5rem;
  }


`

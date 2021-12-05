import styled from 'styled-components'

export const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  align-self: flex-end;
  height: 100vh;
  background: ${props => props.theme.colors.primary};

  h1 {
    color: ${props => props.theme.colors.background};
    margin-top: 140px;
  }

  .content-form {
    align-items: center;
    min-width: 800px;
  }

  .content-form input {
    width: 80%;
    margin-top: 10px;
  }

  .content-form button {
    width: 80%;
    background-color: #4AA96C;
  }

  .content-form a {
    align-self: flex-end;
    margin: 10px 80px;
    text-decoration: none;
    color: ${props => props.theme.colors.background};
  }

  .content-adjustment{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
  }

  .content-form-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }
`

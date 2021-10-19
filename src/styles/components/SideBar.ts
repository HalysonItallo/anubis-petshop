import styled from 'styled-components'

export const SideBarStyle = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  height: 100%;
  min-width: 300px;
  width: 300px;
  color: ${props => props.theme.colors.background};
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  .content-sidebar {
    width: 100%;
    height: 50%;
    display:  flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .content-sidebar hr {
   border: 1px solid ${props => props.theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.background};
  }
`

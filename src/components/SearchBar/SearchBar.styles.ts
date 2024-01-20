import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header.attrs({
  className: "StyledHeader"
})`

background-color: var(--color-yellow);

.container {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const StyledLink = styled(Link)`
  img {
    width: 5rem;
  }
`

export const StyledForm = styled.form.attrs({
  className: "StyledForm"
})`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    font-size: 0.9rem;
    font-family: var(--primary-font);
    min-height: 40px;

    &:focus-visible {
      outline: -webkit-focus-ring-color auto 0px;
    }
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    
    img {
      width: 25px;
    }
  }
`
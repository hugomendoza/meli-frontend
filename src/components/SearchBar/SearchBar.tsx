import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSearchProduct } from "../../hooks";

import { StyledForm, StyledHeader, StyledLink } from "./SearchBar.styles";

import { logoMeli, searchIco } from "../../assets/img";

export const SearchBar = () => {

  const location = useLocation();

  const {
    query,
    getProductsByQuery,
    onInputChange,
    onSubmit,
    resetQueryParam
  } = useSearchProduct();

  useEffect(() => {
    resetQueryParam();
    getProductsByQuery();
  },[location.search])

  return (
    <StyledHeader>
      <div className="container">
        <StyledLink
          to="/"
          onClick={resetQueryParam}
        >
          <img
            src={logoMeli}
            alt="Logo Mercado Libre"
          />
        </StyledLink>
        <StyledForm onSubmit={onSubmit} >
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={query || ""}
            onChange={onInputChange}
          />
          <button type="submit">
            <img
              src={searchIco}
              alt="Icono de Busqueda"
            />
          </button>
        </StyledForm>
      </div>
    </StyledHeader>
  )
}

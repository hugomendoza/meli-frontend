import { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { logoMeli, searchIco } from "../../assets/img";
import { StyledForm, StyledHeader, StyledLink } from "./SearchBar.styles";
import { useAppDispatch } from "../../hooks";
import { getProducts } from "../../service";
import { setItems } from "../../store";

export const SearchBar = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {q} = queryString.parse(location.search);

  const getProductsByQuery = async () => {
    if(!q) return;
    const { data } = await getProducts(q as string);
    const { items } = data;
    dispatch(setItems(items))
  }

  const [query, setQuery] = useState<string>( q as string );

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  }

  const resetQueryParam = () => {
    if(!query){
      dispatch(setItems([]))
      navigate(`/`);
      return
    };
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetQueryParam();
    navigate(`items/?q=${query}`);
  }

  useEffect(() => {
    resetQueryParam();
    getProductsByQuery();
  },[location.search])

  return (
    <StyledHeader>
      <div className="container">
        <StyledLink to="/">
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

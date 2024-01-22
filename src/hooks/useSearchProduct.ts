import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useAppDispatch } from "./useRedux";
import { setItems } from "../store";
import { getProducts } from "../service";

export const useSearchProduct = () => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const {q} = queryString.parse(location.search);
  
  const getProductsByQuery = async () => {
    if(!q) return;
    const { data } = await getProducts(q as string);
    const { items } = data;
    dispatch(setItems(items))
    setQuery(q as string);
  }
  
  const [query, setQuery] = useState
  <string>( q as string );
  
  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  }
  
  const resetQueryParam = () => {
    if( location.pathname === "/" ) {
      dispatch(setItems([]))
      setQuery("");
    };
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(!query) return;
    if( q === query ) return;

    navigate(`items/?q=${query}`);
  }

  return {
    query,
    getProductsByQuery,
    onInputChange,
    onSubmit,
    resetQueryParam
  }
}
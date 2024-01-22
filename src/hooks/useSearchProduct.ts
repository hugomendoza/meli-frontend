import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useAppDispatch } from "./useRedux";
import { setCategories, setItems } from "../store";
import { getProducts } from "../service";

export const useSearchProduct = () => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const {q} = queryString.parse(location.search);
  
  const getProductsByQuery = async () => {
    if(!q) return;
    const { data } = await getProducts(q as string);
    const { items, categories } = data;
    dispatch(setItems(items))
    dispatch(setCategories(categories))
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
      dispatch(setCategories([]))
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
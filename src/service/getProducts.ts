import apiMeli from "../api/api";

import { PropsProducts } from "../types";

export const getProducts = async (param: string) => {
  return await apiMeli.get<PropsProducts>(`api/items?q=${param}`);
}
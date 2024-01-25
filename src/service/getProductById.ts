import apiMeli from "../api/api";

import { PropsProduct } from "../types";

export const getProductById = async (id: string) => {
  return await apiMeli.get<PropsProduct>(`api/items/${id}`);
}
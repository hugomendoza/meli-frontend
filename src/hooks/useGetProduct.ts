import { useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../types";
import { getProductById } from "../service";
import { setLoading } from "../store";
import { useAppDispatch } from "./useRedux";

export const useGetProduct = () => {
  
  const dispatch = useAppDispatch();

  const {id: idProduct} = useParams();
  
  const [product, setProduct] = useState<Item>({} as Item);
  
  const getProduct = async () => {
    dispatch(setLoading(true));
    try {
      const {data} = await getProductById(idProduct!);
      setProduct(data.item);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    idProduct,
    product,
    getProduct
  }
}


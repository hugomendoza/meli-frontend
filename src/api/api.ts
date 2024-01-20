import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_MELI } = getEnvVariables();

const apiMeli = axios.create({
  baseURL: VITE_API_MELI,
})

export default apiMeli
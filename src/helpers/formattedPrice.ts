import { Price } from "../types";

export const formattedPrice = (price:Price) => new Intl.NumberFormat('es-AR',
  { style: 'currency', currency: 'ARS', maximumFractionDigits: 0
}).format(price.amount);
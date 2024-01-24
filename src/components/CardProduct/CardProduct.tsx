import { Link } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { formattedPrice } from "../../helpers";
import { Item } from "../../types";

import { StyledDataCard, StyledProductArticle, StyledShipping } from "./CardProduct.styles";

export const CardProduct = ({id, title, price, picture, free_shipping}:Item) => {

  const priceValue = formattedPrice(price);

  return (
    <StyledProductArticle>
      <figure>
        <img
          src={picture}
          alt={title}
        />
      </figure>
      <StyledDataCard>
        <Link
          to={`/items/${id}`}
        >
          <h2>{title}</h2>
        </Link>
        <p>
          {priceValue}
          <sup>{price["decimals"] > 10 ? price["decimals"] : `${price["decimals"]}0`}</sup>
        </p>
        { free_shipping &&
          <StyledShipping>Envio gratis</StyledShipping>
        }
      </StyledDataCard>
    </StyledProductArticle>
  ) 
}

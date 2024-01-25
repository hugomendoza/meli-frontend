import { useEffect } from 'react';
import { useAppSelector, useGetProduct } from '../../hooks';

import { Breadcrumb, Loader } from '../../components';
import { formattedPrice } from '../../helpers';

export const ProductPage = () => {

  const { categories, loading } = useAppSelector( state => state.search );
  const { getProduct, idProduct, product } = useGetProduct();

  const {condition, title, price, picture,initial_quantity, description } = product;
  
  const priceValue = formattedPrice(price);

  useEffect(() => {
    getProduct();
  }, [idProduct]);


  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">

      <Breadcrumb categories={categories} />
      
      <section className="product">
        <div className="row flex">
          <article>
            <figure className="product__img">
              <img src={picture} alt={title} />
            </figure>
            <div className="product__description">
              <h3>Descripción del producto</h3>
              <p>{description}</p>
            </div>
          </article>
          <aside>
            <p className="product__sold">{condition} - {initial_quantity} vendidos</p>
            <h1>{title}</h1>
            <p className="product__price">{priceValue}
              <sup>{price?.decimals > 10 ? price?.decimals : `${price?.decimals}0`}</sup>
            </p>
            <button className="product__button">Comprar</button>
          </aside>
        </div>
      </section>
    </div>
  )
}

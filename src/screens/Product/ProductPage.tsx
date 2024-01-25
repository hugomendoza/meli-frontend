import { useEffect } from 'react';
import { useAppSelector, useGetProduct } from '../../hooks';

import { Breadcrumb, Loader } from '../../components';
import { formattedPrice } from '../../helpers';
import { StyledArticlePage, StyledDataCard, StyledDescription } from './ProductPage.styles';

export const ProductPage = () => {

  const { categories, loading } = useAppSelector( state => state.search );
  const { getProduct, idProduct, product } = useGetProduct();

  const {condition, title, price, picture,initial_quantity, description } = product;
  
  const priceValue = formattedPrice(price);

  useEffect(() => {
    getProduct();
  }, [idProduct]);


  if (loading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <main>
    
      <section>
        <div className="container">
          <Breadcrumb categories={categories} />
        </div>
      </section>

      <section className="product">
        <div className="container">
          <StyledArticlePage>
            <figure>
              <img
                src={picture}
                alt={title}
              />
            </figure>
            <StyledDataCard>
              <p className="subtitle">
                {condition} | {initial_quantity} disponibles
              </p>
              <h1 className="title">
                {title}
              </h1>
              <p className="price">
                {priceValue}
                <sup>
                  {price?.decimals > 10 ? price?.decimals : `${price?.decimals}0`}
                </sup>
              </p>
              <button className="btn">
                Comprar ahora
              </button>
            </StyledDataCard>
            <StyledDescription>
              <h3>Descripción</h3>
              <p>{description}</p>
            </StyledDescription>
          </StyledArticlePage>
        </div>
      </section>
    </main>
  )
}

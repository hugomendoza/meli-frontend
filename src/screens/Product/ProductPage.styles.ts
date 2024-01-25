import styled from "styled-components";

export const StyledArticlePage = styled.article.attrs({
  className: "StyledArticlePage"
})`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.25rem;

  figure {
    display: block;
    flex: 1;
    
    img {
      aspect-ratio: 1 / 1;
      object-fit: cover;
      width: 100%;
    }
  }

  @media (width < 576px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const StyledDataCard = styled.div.attrs({
  className: "StyledDataCard"
})`
  flex: 1;

  .subtitle {
    font-size: 0.75rem;
    color: var(--color-gray);
    opacity: 0.75;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  .price {
    font-size: 2rem;
    font-weight: 300;

    sup {
      font-size: 1.15rem;
    }
  }

  .btn {
    margin-top: 1rem;
    background-color: var(--color-blue);
    color: white;
    font-weight: 700;
    text-align: center;
    min-width: 275px;
    border: none;
    padding: 0.75rem 0;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
`

export const StyledDescription = styled.div.attrs({
  className: "StyledDescription"
})`
  flex: auto;
  width: 100%;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
    text-wrap: pretty;
  }
`
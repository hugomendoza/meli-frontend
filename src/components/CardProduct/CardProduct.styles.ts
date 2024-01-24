import styled from "styled-components";

export const StyledProductArticle = styled.article.attrs({
  className: "StyledProductArticle"
})`
  display: flex;
  padding: 1rem;
  background-color: white;
  gap: 1rem;
  border-bottom: thin solid #eee;

  figure {
    display: block;
    width: 160px;

    img {
      width: 100%;
    }
  }
`

export const StyledDataCard = styled.div.attrs({
  className: "StyledDataCard"
})`
  a {
    text-decoration: none;
    color: var(--color-black);
  }

  h2 {
    font-weight: 300;
    font-size: 1.125rem;
  }

  p {
    font-size: 1.35rem;
    font-weight: 500;
    margin: 0.5rem 0;
    
    sup {
      font-size: 0.85rem;
    }
  }
`

export const StyledShipping = styled.span.attrs({
  className: "StyledShipping"
})`
  color: var(--color-green);
  font-size: 0.875rem;
  font-weight: 600;
`
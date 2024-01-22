import styled from "styled-components";

export const StyledBreadcrumb = styled.ul.attrs({
  className: "StyledBreadcrumb"
})`
  display: flex;
  align-items: center;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: var(--color-gray);

    svg {
      height: 0.75rem;
      margin: 0 0.25rem;
    }
  }
`

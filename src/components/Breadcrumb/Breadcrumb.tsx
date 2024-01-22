import { BsChevronRight } from "react-icons/bs";
import { StyledBreadcrumb } from "./Breadcrumb.styles";

interface PropsBreadcrumb {
  categories: string[]
}

export const Breadcrumb = ({ categories }:PropsBreadcrumb) => {

  return (
    <>
      <StyledBreadcrumb>
        {categories?.map((cat: string, index: number) => (
          <li key={cat}>
            {cat}
            {index < categories.length - 1 && <BsChevronRight />}
          </li>
        ))}
      </StyledBreadcrumb>
    </>
  )
}
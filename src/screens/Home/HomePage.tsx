import {Helmet} from "react-helmet";
import { Breadcrumb, CardProduct, Seo } from "../../components";
import { useAppSelector } from "../../hooks";

import { Item } from "../../types";
import { StyledHomePage } from "./HomePage.styles";

export const HomePage = () => {
  const { items, categories } = useAppSelector(state => state.search)
  return (
    <StyledHomePage>
      {/* <Seo name="Home" /> */}
      <section>
        <div className="container">
          <Breadcrumb categories={categories} />
        </div>
      </section>
      <section>
        <div className="container">
          {items?.map((item:Item) => <CardProduct key={item.id} {...item} />)}
        </div>
      </section>
    </StyledHomePage>
  )
}

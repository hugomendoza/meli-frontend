
import { Breadcrumb, CardProduct, Loader } from "../../components";
import { useAppSelector } from "../../hooks";

import { Item } from "../../types";
import { StyledHomePage } from "./HomePage.styles";

export const HomePage = () => {
  const { items, categories, loading } = useAppSelector(state => state.search);

  if (loading) {
    return <Loader />;
  }

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

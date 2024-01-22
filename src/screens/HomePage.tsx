import {Helmet} from "react-helmet";
import { Breadcrumb, Seo } from "../components";
import { useAppSelector } from "../hooks";
import { useParams } from "react-router-dom";



export const HomePage = () => {
  const { items, categories } = useAppSelector(state => state.search)
  return (
    <>
      {/* <Seo name="Home" /> */}
      <div>
        <h1>Home Page</h1>
      </div>
      <section>
        <div className="container">
          <article>
            <Breadcrumb categories={categories} />
          </article>
          {items && items.map((item: any) => <p key={item.id}>{item.title}</p>)}
        </div>
      </section>
    </>
  )
}

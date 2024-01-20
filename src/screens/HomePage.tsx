import {Helmet} from "react-helmet";
import { Seo } from "../components";
import { useAppSelector } from "../hooks";
import { useParams } from "react-router-dom";



export const HomePage = () => {
  const { items } = useAppSelector(state => state.search)
  return (
    <>
      {/* <Seo name="Home" /> */}
      <div>
        <h1>Home Page</h1>
        {items && items.map((item: any) => <p key={item.id}>{item.title}</p>)}
      </div>
    </>
  )
}

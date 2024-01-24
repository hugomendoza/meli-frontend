import { Route, Routes, Navigate } from "react-router-dom";

import { SearchBar } from "../components";
import { HomePage, ProductPage } from "../screens";

export const AppRouter = () => {
  
  return (
    <>
      <SearchBar />
      <Routes>
        {['/', '/items'].map((path) => (
          <Route
            key="Home"
            path={path}
            element={<HomePage />}
          />
        ))}
        
        <Route path="items/:id" element={ <ProductPage /> }></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

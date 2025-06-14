// react router dom 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// layouts 
import MainLayout from "./layout/MainLayout"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}></Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
export default App;
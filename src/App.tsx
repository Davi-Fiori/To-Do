import { BrowserRouter, Route, Routes } from "react-router";
import PageComponent from "./pages/pages-component";
import LayoutMain from "./pages/Layout-main";
import PageHome from "./pages/page-home";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
          <Route index element={<PageHome />}/>
            <Route path="/componentes" element={<PageComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

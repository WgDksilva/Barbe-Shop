import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Servicos from "../containers/Servicos";
import Produtos from "../containers/Produtos";
import DefaultLayout from "../layout/DefaultLayout";

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/produtos" element={<Produtos />} />
            </Route>
        </Routes>
    )
}

export default Router
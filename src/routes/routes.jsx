import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Servicos from "../containers/Servicos";
import Produtos from "../containers/Produtos";
import FaleConosco from "../containers/FaleConosco";
import DefaultLayout from "../layout/DefaultLayout";

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/faleConosco" element={<FaleConosco />} />
            </Route>
        </Routes>
    )
}

export default Router
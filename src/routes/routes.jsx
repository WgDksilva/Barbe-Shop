import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Servicos from "../containers/Servicos";
import Produtos from "../containers/Produtos";
import FaleConosco from "../containers/FaleConosco";

function Router(){

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/servicos" element={<Servicos/>} />
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/faleConosco" element={<FaleConosco/>} />
        </Routes>
    )
}

export default Router
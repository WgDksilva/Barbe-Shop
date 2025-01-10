
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <div>
            <Header />
            <Outlet />
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayout

//  <Footer /> Descobrir porque esta dando erro no Footer ?
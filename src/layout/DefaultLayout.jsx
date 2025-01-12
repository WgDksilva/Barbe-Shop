
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function DefaultLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default DefaultLayout


//  <div>Footer</div> Descobrir porque esta dando erro no Footer ? 
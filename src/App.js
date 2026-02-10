import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
// import Serach from "./Serach";

import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturesLogin from "./pages/FeaturesLogin";
// import Pricing from "./pages/Pricing";
import TypingText from "./TypingText";
// import ProductInfo from "./pages/ProductInfo";
// import ViewAllBooks from "./pages/ViewAllBooks";
// import UserCart from "./pages/UserCart";
// import PlaceOrder from "./pages/PlaceOrder";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="hey" element={<TypingText />} />
                <Route exact path="/fet" element={<FeaturesLogin />} />
                {/*<Route exact path="/price" element={<Pricing />} />*/}
                {/*<Route exact path="/get/:name" element={<ProductInfo />} />*/}
                {/*<Route exact path="/viewBooks" element={<ViewAllBooks />} />*/}
                {/*<Route exact path="/order" element={<UserCart />} />*/}
                {/*<Route exact path="/checkout/:total" element={<PlaceOrder />} />*/}
                <Route exact path="/addUser" element={<AddUser />} />
                <Route exact path="/allUser" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

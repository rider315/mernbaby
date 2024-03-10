import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-Layouts";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";
import {Blog} from "./pages/Blog";
import {Blogpost} from "./pages/Blogpost";
import {Homeblog} from "./pages/Homeblog";
import { ScrollToTop } from "./components/ScrollToTop";


const App = () => {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/homeblog" element={<Homeblog />} />
        <Route path="/blog/:slug" element={<Blogpost />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/newsletter" element={<Newsletter />} /> */}
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            <Route path="users/:id/edit" element={<AdminUpdate/>}/>
        </Route>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
};
export default App;
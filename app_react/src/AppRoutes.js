
import Home from './pages/Home'
import Music from './pages/Music'
import Students from './pages/Students'
import StudentsCadastre from './pages/Students/cadastre.js'
import Col from './pages/Col'
import Courses from './pages/Courses'
import FormUser from './pages/User/form'
import Books from './pages/Books'
import FormBooks from './pages/Books/form'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from 'components/Menu/menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Nav  from 'components/Nav/index';
import  ProgressBar  from 'components/ProgressBar/index';
import  FloatingLabel  from 'components/FloatingLabel/index';
import Footer from './components/Footer';
import Celular from './pages/Celular'
export default function AppRoutes() {
    return (
        <BrowserRouter>
        {/*<ProgressBar />*/}
        {/* <Menu /> */}
        
        <Nav />
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/music" element={<Music />}> </Route>
                <Route path="/students" element={<Students />}> </Route>
                <Route path="/Students/cadastre.js" element={<StudentsCadastre />}> </Route>
                <Route path="/col" element={<Col />}> </Route>
                <Route path="/courses" element={<Courses />}> </Route>
                <Route path="/user/form.js" element={<FormUser />}> </Route>
                <Route path="/books" element={<Books />}></Route>
                <Route path="/books/form.js" element={<FormBooks />}> </Route>
                <Route path='/Celular' element={<Celular />} ></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
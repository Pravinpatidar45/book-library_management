import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './component/NavigationBar.js';
import { Student } from './component/Student.js';
import { Librarian } from './component/Librarian.js';
import Login from './component/Login.js';
import Register from './component/Register.js';
import { Home } from './component/Home.js';
import { Admin } from './component/Admin.js';
import LoginLibr from './component/LoginLibr.js';
import LibRegister from './component/LibRegister.js';
import { AdminLogin } from './component/AdminLogin.js';
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path={"/"} element={<Home></Home>}></Route>
          <Route path={"/admin-page"} element={<Admin></Admin>}></Route>
          <Route path={"/student-page"} element={<Student></Student>}></Route>
          <Route path={"/librarian-page"} element={<Librarian></Librarian>}></Route>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/loginlibr" element={<LoginLibr></LoginLibr>} />
          <Route path="/registration" element={<Register></Register>} />
          <Route path='/libregister' element={<LibRegister></LibRegister>}/>
          <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}/>
        </Routes>
      </div>
    </>
  );
}
export default App;
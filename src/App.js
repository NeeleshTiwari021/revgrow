import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/superadmin/commoncomponents/navbar';
import Sidebar from './components/superadmin/commoncomponents/sidebar';
import Companies from './components/superadmin/sections/companies/companies';
import Coupons from './components/superadmin/sections/coupons/coupons';
import Dashboard from './components/superadmin/sections/dashboard/dashboard';
import Order from './components/superadmin/sections/order/order';
import Referral from './components/superadmin/sections/referral/referral';
import Review from './components/superadmin/sections/reviewmanagement/review';
import UserManagement from './components/superadmin/sections/usermanagement/usermanagement';
import Planrequest from './components/superadmin/sections/planrequest/planrequest';
import Landingpage from './components/superadmin/sections/landingpage/landingpage';

function App() {
  return (
    <div className=' flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/companies' element={<Companies/>} />
        <Route path='/coupons' element={<Coupons/>} />
        <Route path='/review' element={<Review/>} />
        <Route path='/landing-page' element={<Landingpage/>} />
        <Route path='/plan-request' element={<Planrequest/>} />
        <Route path='/user_management' element={<UserManagement/>} />
      </Routes>
    </div>
  );
}

export default App;

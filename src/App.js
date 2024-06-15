import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/superadmin/commoncomponents/navbar';
import Sidebar from './components/superadmin/commoncomponents/sidebar';
import Companies from './components/superadmin/sections/companies/companies';
import Coupons from './components/superadmin/sections/coupons/coupons';
import Dashboard from './components/superadmin/sections/dashboard/dashboard';
import Order from './components/superadmin/sections/order/order';
import Review from './components/superadmin/sections/reviewmanagement/review';
import UserManagement from './components/superadmin/sections/usermanagement/usermanagement';
import Planrequest from './components/superadmin/sections/planrequest/planrequest';
import Landingpage from './components/superadmin/sections/landingpage/landingpage';
import Emailtemplate from './components/superadmin/sections/emailtemplate/emailtemplate';
import Profile from './components/superadmin/sections/profile/profile';
import EmailPage from './components/superadmin/sections/settings/components/page/email';
import ChachePage from './components/superadmin/sections/settings/components/page/chache';
import CookiePage from './components/superadmin/sections/settings/components/page/cookie';
import PaymentPage from './components/superadmin/sections/settings/components/page/payment';
import PucherPage from './components/superadmin/sections/settings/components/page/pucher';
import SeoPage from './components/superadmin/sections/settings/components/page/seo';
import BrandPage from './components/superadmin/sections/settings/components/page/brand';
import StoragePage from './components/superadmin/sections/settings/components/page/storage';
import RecaptchaPage from './components/superadmin/sections/settings/components/page/recaptcha';
import TwilioPage from './components/superadmin/sections/settings/components/page/twilio';
import { useState } from 'react';
import Login from './components/superadmin/sections/auth/login';
import Registration from './components/superadmin/sections/auth/registration';
import Grouppermission from './components/superadmin/sections/usermanagement/components/group_permission';
import Userreport from './components/superadmin/sections/usermanagement/components/user_report';
import Tickets from './components/superadmin/sections/tickets/tickets';
import CreateTickets from './components/superadmin/sections/tickets/components/createtickets';
import Ticketform from './components/superadmin/sections/tickets/components/ticketform';
import Plan from './components/superadmin/sections/plan/plan';
import WriteReview from './components/superadmin/sections/reviewmanagement/writeReview';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/registration';

  return (
    <div className='flex'>
      {!isAuthPage && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className="p-4 main_block_superadmin">
        {!isAuthPage && <Navbar toggleSidebar={toggleSidebar} />}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/order' element={<Order />} />
          <Route path='/plans' element={<Plan />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/coupons' element={<Coupons />} />
          <Route path='/review' element={<Review />} />
          <Route path='/write-review' element={<WriteReview />} />
          <Route path='/tickets' element={<Tickets/>} />
          <Route path='/create-tickets' element={<CreateTickets/>} />
          <Route path='/ticket-form' element={<Ticketform/>} />
          <Route path='/landing-page' element={<Landingpage />} />
          <Route path='/plan-request' element={<Planrequest />} />
          <Route path='/user_management' element={<UserManagement />} />
          <Route path='/user_report' element={<Userreport />} />
          <Route path='/group_permission' element={<Grouppermission />} />
          <Route path='/email-template' element={<Emailtemplate />} />
          <Route path='/settings/brand' element={<BrandPage />} />
          <Route path='/settings/email' element={<EmailPage />} />
          <Route path='/settings/pucher' element={<PucherPage />} />
          <Route path='/settings/seo' element={<SeoPage />} />
          <Route path='/settings/chache' element={<ChachePage />} />
          <Route path='/settings/payment' element={<PaymentPage />} />
          <Route path='/settings/cookie' element={<CookiePage />} />
          <Route path='/settings/storage' element={<StoragePage />} />
          <Route path='/settings/twilio' element={<TwilioPage />} />
          <Route path='/settings/recaptcha' element={<RecaptchaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

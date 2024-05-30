import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import Settings from './components/superadmin/sections/settings/settings';
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

function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className=' flex'>
      <Sidebar isSidebarVisible={isSidebarVisible}/>
      <div class="p-4 main_block_superadmin">
        <Navbar toggleSidebar={toggleSidebar}/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/order' element={<Order />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/coupons' element={<Coupons />} />
          <Route path='/review' element={<Review />} />
          <Route path='/landing-page' element={<Landingpage />} />
          <Route path='/plan-request' element={<Planrequest />} />
          <Route path='/user_management' element={<UserManagement />} />
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

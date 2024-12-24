import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import StockView from './components/StockView';
import Signup from './components/Signup';
import { BASE_URL } from './components/Godurl';
import CardContent from './components/CardContent';
import Userdashboard from './components/Userdashboard';
import Billing from './components/Billing';
import OtpVerification from './components/OtpVerification';
import Userprofile from './components/Userprofile';
import AdminLogin from './components/AdminLogin';
import ForgotPass from './components/ForgotPass';
import { NewPass } from './components/NewPass';
import { Howtopay } from './components/Howtopay';
import { Upipay } from './components/Upipay';
import { CreditDebit } from './components/CreditDebit';
import UserData from './components/user data';
import Home from './components/home';
import Users from './components/admin/users';
import AdminDashboard from './components/admin/dashboard';
import Companies from './components/admin/companies';
import AddCompany from './components/admin/addCompanies';
import VerifyEmail from './components/verifyEmail';
import Profile from './components/user/profile';
import "./components/css/responsive.css"
 import UserDashboard from './components/user/dashboard';
 import CardDetails from './components/user/cardDetail';
import Cards from './components/admin/cards';
import AddCard from './components/admin/addCard';
import UpdateCard from './components/admin/updateCard';
import UpdateCompany from './components/admin/updateCompanies';
import Category from './components/admin/category';
import AddCategory from './components/admin/addCategory';
 import MembershipCard from './components/user/membershipCard';
import JoinMemberShip from './components/joinMembership';
import AboutUs from './components/about us/aboutUs';
import Contact from './components/contact/contact';
import Tnc from './components/tnc';
import Pnp from './components/pnp';
import Dnd from './components/dnd';
import TickerData from './components/admin/tickerData';
import Help from './components/help/help';
import TickerTap from './components/ticker';
import DonutChart from './components/donut';
import UserShareCard from "./components/user/userShareCard"
import config from './config';



// index.js or App.js

// Create a context
export const ProgressContext = createContext();

const App = () => {

  const [loginStatus, setLoginStatus] = useState({ success: true, message: '' });
  // email
  const [email, setEmail] = useState(null);
  // picture
  const [picture, setPicture] = useState(null);

  // name
  const [name, setName] = useState(null);
  const [carddata, setCarddata] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cardvideo, setCardvideo] = useState(null);
  const [userid, setUserid] = useState(null);
  const [newname, setNewname] = useState(null);
  const [impcardid, setImpcardid] = useState([]);
  const [membershipsubscription, setMembershipsubscription] = useState();
  const [subscriptionstartdate, setSubscriptionstartdate] = useState();
  const [subscriptionenddate, setSubscriptionenddate] = useState();
  const [subscriptiontype, setSubscriptiontype] = useState();
  // const location = useLocation();
  const [progressValues, setProgressValues] = useState({});

  const getCarddata = async (e) => {
    try {
      const response = await fetch(`${BASE_URL}/dashboard`, {
        method: "GET",
      })
      const data = await response.json();
      setCarddata(data)
    }
    catch (err) {
      // console.log(err);
    }
    finally {
      setLoading(false); // Set loading to false after fetching data, regardless of success or failure
    }
  }

  // if (loginStatus.success === false || loginStatus.success === null) {
  //   {
  //     setMembershipsubscription(prev => undefined);
  //   }
  // }

  const fetchUserid = async () => {
    try {
      // Fetch userid for Google login
      const googleResponse = await fetch(`${BASE_URL}/google`, {
        method: "GET",
      });
      const googleData = await googleResponse.json();

      // Fetch userid for other login method
      const loginResponse = await fetch(`${BASE_URL}/login`, {
        method: "GET",
      });
      const loginData = await loginResponse.json();

      // Combine data from both endpoints
      const combinedData = [...googleData, ...loginData];
      let currentUser = await combinedData.find((user => user.email === email));
      if (currentUser) {
        setUserid(currentUser._id);
      }
      // setName(currentUser.name);
    } catch (err) {
      console.error("Error fetching userid:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserid();
  }, [loginStatus]);

  useEffect(() => {
    // Simulating data fetching
    getCarddata();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // You can replace this with your actual data fetching logic
  }, [reload]);

  // login status
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // name
  useEffect(() => {
    const storedName = sessionStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // picture
  useEffect(() => {
    const storedPicture = sessionStorage.getItem('picture');
    if (storedPicture) {
      setPicture(storedPicture);
    }
  }, []);

  // localstore loginStatus
  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem('loginStatus');
    if (storedLoginStatus) {
      setLoginStatus(JSON.parse(storedLoginStatus));
    }
  }, []);

  // localstore userid
  useEffect(() => {
    const storedUserid = sessionStorage.getItem('userid');
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);


  // Update localStorage when loginStatus, email, or picture changes
  useEffect(() => {
    // sessionStorage.setItem('loginStatus', JSON.stringify(loginStatus));


    if (loginStatus.success !== true && loginStatus.success !== null) {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('picture', picture);
      sessionStorage.setItem('userid', userid);
      sessionStorage.setItem('name', name);
      setMembershipsubscription(undefined)
    }
  }, [loginStatus.success, email, picture, userid, name]);

  // getUserid of current logged in user

  // console.log(cardvideo)



  // return (
  //   <Router>
  //     {/* <div className="app"> */}
  //     <ProgressContext.Provider value={{ progressValues, setProgressValues, cardvideo, setCardvideo, membershipsubscription, setMembershipsubscription, subscriptionstartdate, setSubscriptionstartdate, subscriptionenddate, setSubscriptionenddate, subscriptiontype, setSubscriptiontype }}>
  //       {/* <Navbar loginStatus={loginStatus} setLoginStatus={setLoginStatus} name={name} setName={setName} picture={picture} setPicture={setPicture}
  //         newname={newname}
  //         setUserid={setUserid}
  //         email={email}
  //       /> */}
  //       <Routes> 
  //         {/* Wrap your routes in the Routes component */}
  //         {/* initial route to login */}
          
  //         <Route path="/DonutChart" element={<DonutChart />} />

  //         {/* <Route path="/login" element={<Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} setEmail={setEmail} setName={setName} setPicture={setPicture} email={email} picture={picture} name={name} setImpcardid={setImpcardid} />} /> */}
  //         <Route path="/signup" element={<Signup />} />

  //         <Route path="/login" element={<Login/>} />
  //         <Route path="/verifyEmail/:token" element={<VerifyEmail/>} />

  //         <Route path="/forgotpass" element={<ForgotPass />} />
  //         <Route path="/resetPassword/:token" element={<NewPass />} />
  //         {loginStatus.success !== false && <Route path="/" element={<Home getCarddata={getCarddata} carddata={carddata} reload={reload} setReload={setReload} loading={loading} loginStatus={loginStatus} setCardvideo={setCardvideo} userid={userid} />} />}
  //         {/* <Route path="/home"  element={<Main getCarddata={getCarddata} carddata={carddata} reload={reload} setReload={setReload}/>} /> Define a route for the Main component */}
  //         {/* Add more routes for other components/pages */}
  //         Example:
  //         {/* <Route path="/about" element={<About />} /> */}
  //         <Route path="/stockview" element={<StockView />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/dashboard" element={<Dashboard getCarddata={getCarddata} carddata={carddata} reload={reload} setReload={setReload} />} />
  //         <Route path="/userprofile" element={<Userprofile loginStatus={loginStatus} email={email} picture={picture} setEmail={setEmail} setPicture={setPicture} userid={userid} setName={setName} name={name} />} />
  //         <Route path="/home/card/:id" element={<CardContent cardvideo={cardvideo} loginStatus={loginStatus} userid={userid} />} />
  //         <Route path="/userdashboard" element={<Userdashboard loginStatus={loginStatus} carddata={carddata} userid={userid} />} />
  //         <Route path="/pricing" element={<Billing userid={userid} />} />
  //         <Route path="/howtopay" element={<Howtopay />} />
  //         <Route path="/upipay" element={<Upipay />} />
  //         <Route path="/creditdebit" element={<CreditDebit />} />
  //         <Route path="/admin" element={<AdminLogin />} />

  //         <Route path="/overview/:compId" element={<UserData />} />
  //         <Route path="/admin/users" element={<Users />} />
  //         <Route path="/admin/cards" element={<Cards />} />
  //         <Route path="/admin/dashboard" element={<AdminDashboard />} />
  //         <Route path="/admin/companies" element={<Companies />} />
  //         <Route path="/admin/category" element={<Category />} />
          

  //         <Route path="/admin/add-company" element={<AddCompany />} />
  //         <Route path="/admin/add-card" element={<AddCard />} />
  //         <Route path="/admin/add-category" element={<AddCategory />} />

  //         <Route path="/admin/update-card/:id" element={<UpdateCard />} />
  //         <Route path="/admin/update-company/:id" element={<UpdateCompany />} />

  //         <Route path="/admin/tickerData" element={<TickerData />} />

  //         <Route path="/user/profile" element={<Profile />} />
  //         <Route path="/user/dashboard" element={<UserDashboard />} />
  //         <Route path="/user/card-detail" element={<CardDetails />} />
  //         <Route path="/user/membership-card" element={<MembershipCard />} />
  //         <Route path="/membership-card/:id" element={<UserShareCard />} />

  //         <Route path="/join-membership" element={<JoinMemberShip />} />
  //         <Route path="/about" element={<AboutUs />} />
  //         <Route path="/help" element={<Help />} />


  //         <Route path="/tearms-and-conditions" element={<Tnc />} />
  //         <Route path="/privacy-policy" element={<Pnp />} />
  //         <Route path="/disclaimer-disclosures" element={<Dnd />} />
  //         <Route path="/TickerTap" element={<TickerTap />} />

          
        
  //         {/* wrong path 404 */}
  //         <Route path="*" element={<h1 style={{
  //           position: "fixed",
  //           width: "100%",
  //           height: "100vh",
  //           top: "7rem",
  //         }}>404 Not Found</h1>} />

  //       </Routes>
  //       {/* <Footer /> */}
  //       {/* </div> */}
  //     </ProgressContext.Provider>
  //   </Router>
  // );

  return (
    <Router>
      <ProgressContext.Provider
        value={{
          progressValues,
          setProgressValues,
          cardvideo,
          setCardvideo,
          membershipsubscription,
          setMembershipsubscription,
          subscriptionstartdate,
          setSubscriptionstartdate,
          subscriptionenddate,
          setSubscriptionenddate,
          subscriptiontype,
          setSubscriptiontype,
        }}
      >
        <Routes>
          <Route path={`${config.baseUrl}DonutChart`} element={<DonutChart />} />
          <Route path={`${config.baseUrl}signup`} element={<Signup />} />
          <Route path={`${config.baseUrl}login`} element={<Login />} />
          <Route path={`${config.baseUrl}verifyEmail/:token`} element={<VerifyEmail />} />
          <Route path={`${config.baseUrl}forgotpass`} element={<ForgotPass />} />
          <Route path={`${config.baseUrl}resetPassword/:token`} element={<NewPass />} />
          {loginStatus.success !== false && (
            <Route
              path={`${config.baseUrl}`}
              element={
                <Home
                  getCarddata={getCarddata}
                  carddata={carddata}
                  reload={reload}
                  setReload={setReload}
                  loading={loading}
                  loginStatus={loginStatus}
                  setCardvideo={setCardvideo}
                  userid={userid}
                />
              }
            />
          )}
          <Route path={`${config.baseUrl}stockview`} element={<StockView />} />
          <Route path={`${config.baseUrl}contact`} element={<Contact />} />
          <Route
            path={`${config.baseUrl}dashboard`}
            element={
              <Dashboard
                getCarddata={getCarddata}
                carddata={carddata}
                reload={reload}
                setReload={setReload}
              />
            }
          />
          <Route
            path={`${config.baseUrl}userprofile`}
            element={
              <Userprofile
                loginStatus={loginStatus}
                email={email}
                picture={picture}
                setEmail={setEmail}
                setPicture={setPicture}
                userid={userid}
                setName={setName}
                name={name}
              />
            }
          />
          <Route
            path={`${config.baseUrl}home/card/:id`}
            element={<CardContent cardvideo={cardvideo} loginStatus={loginStatus} userid={userid} />}
          />
          <Route
            path={`${config.baseUrl}userdashboard`}
            element={<Userdashboard loginStatus={loginStatus} carddata={carddata} userid={userid} />}
          />
          <Route path={`${config.baseUrl}pricing`} element={<Billing userid={userid} />} />
          <Route path={`${config.baseUrl}howtopay`} element={<Howtopay />} />
          <Route path={`${config.baseUrl}upipay`} element={<Upipay />} />
          <Route path={`${config.baseUrl}creditdebit`} element={<CreditDebit />} />
          <Route path={`${config.baseUrl}admin`} element={<AdminLogin />} />
          <Route path={`${config.baseUrl}overview/:compId`} element={<UserData />} />
          <Route path={`${config.baseUrl}admin/users`} element={<Users />} />
          <Route path={`${config.baseUrl}admin/cards`} element={<Cards />} />
          <Route path={`${config.baseUrl}admin/dashboard`} element={<AdminDashboard />} />
          <Route path={`${config.baseUrl}admin/companies`} element={<Companies />} />
          <Route path={`${config.baseUrl}admin/category`} element={<Category />} />
          <Route path={`${config.baseUrl}admin/add-company`} element={<AddCompany />} />
          <Route path={`${config.baseUrl}admin/add-card`} element={<AddCard />} />
          <Route path={`${config.baseUrl}admin/add-category`} element={<AddCategory />} />
          <Route path={`${config.baseUrl}admin/update-card/:id`} element={<UpdateCard />} />
          <Route path={`${config.baseUrl}admin/update-company/:id`} element={<UpdateCompany />} />
          <Route path={`${config.baseUrl}admin/tickerData`} element={<TickerData />} />
          <Route path={`${config.baseUrl}user/profile`} element={<Profile />} />
          <Route path={`${config.baseUrl}user/dashboard`} element={<UserDashboard />} />
          <Route path={`${config.baseUrl}user/card-detail`} element={<CardDetails />} />
          <Route path={`${config.baseUrl}user/membership-card`} element={<MembershipCard />} />
          <Route path={`${config.baseUrl}membership-card/:id`} element={<UserShareCard />} />
          <Route path={`${config.baseUrl}join-membership`} element={<JoinMemberShip />} />
          <Route path={`${config.baseUrl}about`} element={<AboutUs />} />
          <Route path={`${config.baseUrl}help`} element={<Help />} />
          <Route path={`${config.baseUrl}terms-and-conditions`} element={<Tnc />} />
          <Route path={`${config.baseUrl}privacy-policy`} element={<Pnp />} />
          <Route path={`${config.baseUrl}disclaimer-disclosures`} element={<Dnd />} />
          <Route path={`${config.baseUrl}TickerTap`} element={<TickerTap />} />
          <Route
            path="*"
            element={
              <h1
                style={{
                  position: "fixed",
                  width: "100%",
                  height: "100vh",
                  top: "7rem",
                }}
              >
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </ProgressContext.Provider>
    </Router>
  );
  
  
}

export default App;
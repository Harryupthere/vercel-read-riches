// import React, { useState, useEffect, useRef } from 'react';
// import { Container, Row, Col, Spinner } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../../components/css/UserData.css'
// import OverView from './overView';
// import PriceChart from './priceChart';
// import CompanyProfile from './companyProfile';
// import News from './news';
// import Insight from './insights';
// import Headwinds from './headwinds';
// import Managment from './managment';
// import Financial from './financial';
// import Valuation from './valuation';
// import Competitor from './competitor';
// import ScrollProgressBar from './scrollbar';
// import Header from "../../components/header"
// import config from '../../config';
// import HomeIcon from "../../components/img/icon/home.svg"
// import PriceIcon from "../../components/img/icon/price.svg"
// import CompanyIcon from "../../components/img/icon/company.svg"
// import NewsIcon from "../../components/img/icon/news.svg"
// import InsightIcon from "../../components/img/icon/insight.svg"
// import TailwindsIcon from "../../components/img/icon/tailwind.svg"
// import MessageIcon from "../../components/img/icon/message.svg"
// import FinanceIcon from "../../components/img/icon/fit-sreen.svg"
// import ValuationIcon from "../../components/img/icon/valuation.svg"
// import TrophyIcon from "../../components/img/icon/trophy.svg"
// import Footer from '../Footer';
// import { useParams } from 'react-router-dom'; // Import useParams

// const UserData = () => {
//   const { compId } = useParams(); // Extract compId from URL parameters
//   const checkToken = localStorage.getItem("token");

//   if (!checkToken) {
//     const checkRole = localStorage.getItem("role");
//   }

//   const [overviewData, setOverviewData] = useState([])
//   const [companyProfileData, setCompanyProfileData] = useState([])
//   const [industryInsideData, setIndustryInside] = useState([])
//   const [HEADWINDS_TAILWINDSData, setHEADWINDS_TAILWINDSData] = useState([])
//   const [managementMattersData, setManagementMattersData] = useState([])
//   const [financialXrayData, setFinancialXrayData] = useState([])
//   const [valuationData, setValuationData] = useState([])
//   const [competitorCheckData, setCompetitorCheckData] = useState([])
//   const [companyName, setCompanyName] = useState('')
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('list-item-1'); // Track active section




//   const fetchUserDetails = async () => {
//     try {
//       const response = await fetch(`${config.apiUrl}stock/${compId}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${checkToken}` // Replace with actual token
//         }
//       });

//       const result = await response.json();

//       if (result.success) {
//         setCompanyName(result.company_name)
//         setOverviewData(result.data[0].overview)
//         setCompanyProfileData(result.data[0].companyProfile)
//         setIndustryInside(result.data[0].industryInside)
//         setHEADWINDS_TAILWINDSData(result.data[0].HEADWINDS_TAILWINDS)
//         setManagementMattersData(result.data[0].managementMatters)
//         setFinancialXrayData(result.data[0].financialXray)
//         setValuationData(result.data[0].valuation)
//         setCompetitorCheckData(result.data[0].competitorCheck)
//       }
//     } catch (error) {
//       console.error('Error fetching companies:', error);
//     } finally {
//       setLoading(false); // Hide loader after data is fetched
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);


//   const [scrollPercent, setScrollPercent] = useState(0);  // To track scroll percentage

//   const componentRefs = {
//     overview: useRef(null),
//     priceChart: useRef(null),
//     companyProfile: useRef(null),
//     insight: useRef(null),
//     headwinds: useRef(null),
//     management: useRef(null),
//     financial: useRef(null),
//     valuation: useRef(null),
//     competitor: useRef(null),
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrollPosition = window.scrollY;
//       const scrolledPercent = ((scrollPosition / totalHeight) * 100) + 4;
//       console.log(scrolledPercent >= 100 ? 100 : parseInt(scrolledPercent))
//       setWatchlist(scrolledPercent >= 100 ? 100 : parseInt(scrolledPercent))
//       setScrollPercent(scrolledPercent == 100 ? 100 : parseInt(scrolledPercent));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   useEffect(() => {
//     const options = {
//       root: null, // Use the viewport
//       rootMargin: '0px',
//       threshold: 0.2, // Change this to 0 for testing, see if it improves detection
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           console.log(entry.target.id)
//           setActiveSection(entry.target.id); // Set active section when it comes into view
//         }
//       });
//     }, options);

//     // Observe the sections using refs
//     Object.values(componentRefs).forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       // Cleanup the observer
//       Object.values(componentRefs).forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [componentRefs]); // Ensure componentRefs is included in the dependency array


//   const setWatchlist = async (pros) => {
//     try {
//       const payload = { companyId: compId, progress: pros }
//       const response = await fetch(`${config.apiUrl}watchlist`, {
//         method: 'POST',
//         body: JSON.stringify(payload), // Convert payload to JSON string
//         headers: {
//           'Authorization': `Bearer ${checkToken}`, // Replace with actual token
//           'Content-Type': 'application/json', // Set the Content-Type to JSON
//         },
//       });

//       const result = await response.json();
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <>
//       <Header />

//       <div className='user-data'>
//         {/* <ScrollProgressBar/> */}
//         <Container fluid className='my-3 pt-md-2 px-0'>
//           <Row>
//             <Col lg={3} style={{ position: "relative" }} className='p-0'>
//               <div id="list-example" className="list-group list-group-sidebar" >
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-1' ? 'active' : ''}`} href="#list-item-1"><img src={HomeIcon} className='me-3' />Overview</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-2' ? 'active' : ''}`} href="#list-item-2"><img src={PriceIcon} className='me-3' />Price Chart</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-3' ? 'active' : ''}`} href="#list-item-3"><img src={CompanyIcon} className='me-3' />Company profile</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-4' ? 'active' : ''}`} href="#list-item-4"><img src={InsightIcon} className='me-3' />Industry insights </a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-5' ? 'active' : ''}`} href="#list-item-5"><img src={TailwindsIcon} className='me-3' />Headwinds & Tailwinds </a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-6' ? 'active' : ''}`} href="#list-item-6"><img src={MessageIcon} className='me-3' />Management matters</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-7' ? 'active' : ''}`} href="#list-item-7"><img src={FinanceIcon} className='me-3' />Financial X-ray</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-8' ? 'active' : ''}`} href="#list-item-8"><img src={ValuationIcon} className='me-3' />Valuation</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-9' ? 'active' : ''}`} href="#list-item-9"><img src={TrophyIcon} className='me-3' />Competitor check </a>
//               </div>
//             </Col>

//             <Col lg={9} className='p-0'>
//               {loading ? (
//                 <div className='text-center'>
//                   <Spinner animation="border" variant="primary" />
//                 </div>
//               ) : (
//                 <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example all-menus" tabIndex="0">
//                   <div id="list-item-1" ref={componentRefs.overview}>
//                     {overviewData.length > 0 && <OverView comname={companyName} data={overviewData} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-2" ref={componentRefs.priceChart}>
//                     <PriceChart />
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-3" ref={componentRefs.companyProfile}>
//                     {companyProfileData.length > 0 && <CompanyProfile comname={companyName} data={companyProfileData} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-4" ref={componentRefs.insight}>
//                     {industryInsideData.length > 0 && <Insight comname={companyName} data={industryInsideData} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-5" ref={componentRefs.headwinds}>
//                     {HEADWINDS_TAILWINDSData.length > 0 && <Headwinds comname={companyName} data={HEADWINDS_TAILWINDSData} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-6" ref={componentRefs.management}>
//                     {managementMattersData.length > 0 && <Managment comname={companyName} data={managementMattersData} compId={compId} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-7" ref={componentRefs.financial}>
//                     {financialXrayData.length > 0 && <Financial comname={companyName} data={financialXrayData} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-8" ref={componentRefs.valuation}>
//                     {valuationData.length > 0 && <Valuation comname={companyName} data={valuationData} />}
//                   </div>
//                   <hr className='w-100 my-5' />
//                   <div id="list-item-9" ref={componentRefs.competitor}>
//                     {competitorCheckData.length > 0 && <Competitor comname={companyName} data={competitorCheckData} />}
//                   </div>
//                 </div>)}



//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default UserData;




import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import '../../components/css/UserData.css'
import OverView from './overView';
import PriceChart from './priceChart';
import CompanyProfile from './companyProfile';
import News from './news';
import Insight from './insights';
import Headwinds from './headwinds';
import Managment from './managment';
import Financial from './financial';
import Valuation from './valuation';
import Competitor from './competitor';
import ScrollProgressBar from './scrollbar';
import Header from "../header"
import config from '../../config';
import HomeIcon from "../../components/img/icon/home.svg"
import PriceIcon from "../../components/img/icon/price.svg"
import CompanyIcon from "../../components/img/icon/company.svg"
import NewsIcon from "../../components/img/icon/news.svg"
import InsightIcon from "../../components/img/icon/insight.svg"
import TailwindsIcon from "../../components/img/icon/tailwind.svg"
import MessageIcon from "../../components/img/icon/message.svg"
import FinanceIcon from "../../components/img/icon/fit-sreen.svg"
import ValuationIcon from "../../components/img/icon/valuation.svg"
import TrophyIcon from "../../components/img/icon/trophy.svg"
import Footer from '../Footer';
import { useParams } from 'react-router-dom'; // Import useParams
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import toast, { Toaster } from "react-hot-toast";

// const UserData = () => {
//   const { compId } = useParams(); // Extract compId from URL parameters
//   const checkToken = localStorage.getItem("token");

//   if (!checkToken) {
//     const checkRole = localStorage.getItem("role");
//   }
//   const location = useLocation();

//   // const { companyName,
//   //   overviewData,
//   //   companyProfileData,
//   //   industryInsideData,
//   //   HEADWINDS_TAILWINDSData,
//   //   managementMattersData,
//   //   financialXrayData,
//   //   valuationData,
//   //   competitorCheckData } = location.state || {};

// const [companyName, setCompanyName] = useState('zz');
// const [overviewData, setOverviewData] = useState([]);
// const [companyProfileData, setCompanyProfileData] = useState([]);
// const [industryInsideData, setIndustryInsideData] = useState([]);
// const [HEADWINDS_TAILWINDSData, setHEADWINDS_TAILWINDSData] = useState([]);
// const [managementMattersData, setManagementMattersData] = useState([]);
// const [financialXrayData, setFinancialXrayData] = useState([]);
// const [valuationData, setValuationData] = useState([]);
// const [competitorCheckData, setCompetitorCheckData] = useState([]);

//   const [activeSection, setActiveSection] = useState('list-item-1'); // Track active section
//   const componentRefs = {
//     overview: useRef(null),
//     priceChart: useRef(null),
//     companyProfile: useRef(null),
//     insight: useRef(null),
//     headwinds: useRef(null),
//     management: useRef(null),
//     financial: useRef(null),
//     valuation: useRef(null),
//     competitor: useRef(null),
//   };

//   const yy=async()=>{

//     const response = await fetch('http://localhost:3001/stock/1727841053670', {
//       method: 'GET',
//       headers: {
//           'Authorization': `Bearer ${checkToken}` // Replace with actual token
//       }
//   });
//     const result = await response.json();
//     let res = result.data[0]
//       setHEADWINDS_TAILWINDSData(res?.HEADWINDS_TAILWINDS)
//       setCompanyProfileData(res?.companyProfile)
//       setCompetitorCheckData(res?.competitorCheck)
//       setFinancialXrayData(res?.financialXray)
//       setIndustryInsideData(res?.industryInside)
//       setManagementMattersData(res?.managementMatters)
//       setOverviewData(res?.overview)
//       setValuationData(res?.valuation)
//   }
//   useEffect(() => {
//     yy()
//   },[])

//   useEffect(() => {
//     const options = {
//       root: null, // Use the viewport
//       rootMargin: '0px',
//       threshold: 0.2, // Change this to 0 for testing, see if it improves detection
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           console.log(entry.target.id)
//           setActiveSection(entry.target.id); // Set active section when it comes into view
//           if (entry.target.id == 'list-item-1') {
//             setWatchlist(10)
//           }
//           if (entry.target.id == 'list-item-2') {
//             setWatchlist(20)
//           }
//           if (entry.target.id == 'list-item-3') {
//             setWatchlist(30)
//           }
//           if (entry.target.id == 'list-item-4') {
//             setWatchlist(40)
//           }
//           if (entry.target.id == 'list-item-5') {
//             setWatchlist(50)

//           }
//           if (entry.target.id == 'list-item-6') {
//             setWatchlist(60)

//           }
//           if (entry.target.id == 'list-item-7') {
//             setWatchlist(70)

//           }
//           if (entry.target.id == 'list-item-8') {
//             setWatchlist(80)

//           }
//           if (entry.target.id == 'list-item-9') {
//             setWatchlist(100)

//           }
//         }
//       });
//     }, options);

//     // Observe the sections using refs
//     Object.values(componentRefs).forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       // Cleanup the observer
//       Object.values(componentRefs).forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [componentRefs]); // Ensure componentRefs is included in the dependency array

//   const setWatchlist = async (pros) => {
//     try {
//       const payload = { companyId: compId, progress: pros }
//       const response = await fetch(`${config.apiUrl}watchlist`, {
//         method: 'POST',
//         body: JSON.stringify(payload), // Convert payload to JSON string
//         headers: {
//           'Authorization': `Bearer ${checkToken}`, // Replace with actual token
//           'Content-Type': 'application/json', // Set the Content-Type to JSON
//         },
//       });

//       const result = await response.json();
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   const handleScroll = () => {
//     const sections = document.querySelectorAll('[id^="list-item"]');
//     let activeId = 'list-item-1';

//     sections.forEach((section) => {
//       const sectionTop = section.getBoundingClientRect().top;
//       if (sectionTop <= 100 && sectionTop >= -100) {
//         activeId = section.id;
//       }
//     });

//     setActiveSection(activeId);
//   };

//   const handleSidebarClick = (id) => {

//     const section = document.getElementById(id);

//     // if (section) {
//     //   // Scroll smoothly to the section
//     //   window.scrollTo({
//     //     top: section.offsetTop,
//     //     behavior: 'smooth',
//     //   });
//        setActiveSection(id); // Update active section on click
//     // }
//   };

//   // useEffect(() => {
//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => {
//   //     window.removeEventListener('scroll', handleScroll);
//   //   };
//   // }, []);


//   return (
//     <>
//       <Header />

//       <div className='user-data'>
//         {/* <ScrollProgressBar/> */}
//         <Container fluid className='my-3 pt-md-2 px-0'>
//           <Row>
//             <Col lg={3} style={{ position: "relative" }} className='p-0'>
//               <div id="list-example" className="list-group list-group-sidebar" >
//                 {/* <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-1' ? 'active' : ''}`} href="#list-item-1" ><img src={HomeIcon} className='me-3' />Overview</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-2' ? 'active' : ''}`} href="#list-item-2"><img src={PriceIcon} className='me-3' />Price Chart</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-3' ? 'active' : ''}`} href="#list-item-3"><img src={CompanyIcon} className='me-3' />Company profile</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-4' ? 'active' : ''}`} href="#list-item-4"><img src={InsightIcon} className='me-3' />Industry insights </a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-5' ? 'active' : ''}`} href="#list-item-5"><img src={TailwindsIcon} className='me-3' />Headwinds & Tailwinds </a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-6' ? 'active' : ''}`} href="#list-item-6"><img src={MessageIcon} className='me-3' />Management matters</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-7' ? 'active' : ''}`} href="#list-item-7"><img src={FinanceIcon} className='me-3' />Financial X-ray</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-8' ? 'active' : ''}`} href="#list-item-8"><img src={ValuationIcon} className='me-3' />Valuation</a>
//                 <a className={`list-group-item list-group-item-action ${activeSection === 'list-item-9' ? 'active' : ''}`} href="#list-item-9"><img src={TrophyIcon} className='me-3' />Competitor check </a> */}

//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-1' ? 'active' : ''}`}
//                   //href="#list-item-1"
//                   onClick={() => handleSidebarClick('list-item-1')}
//                 >
//                   <img src={HomeIcon} className="me-3" alt="Home" />
//                   Overview
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-2' ? 'active' : ''}`}
//                   //href="#list-item-2"
//                   onClick={() => handleSidebarClick('list-item-2')}
//                 >
//                   <img src={PriceIcon} className="me-3" alt="Price Chart" />
//                   Price Chart
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-3' ? 'active' : ''}`}
//                   //href="#list-item-3"
//                   onClick={() => handleSidebarClick('list-item-3')}
//                 >
//                   <img src={CompanyIcon} className="me-3" alt="Company Profile" />
//                   Company Profile
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-4' ? 'active' : ''}`}
//                   //href="#list-item-4"
//                   onClick={() => handleSidebarClick('list-item-4')}
//                 >
//                   <img src={InsightIcon} className="me-3" alt="Industry Insights" />
//                   Industry Insights
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-5' ? 'active' : ''}`}
//                   //href="#list-item-5"
//                   onClick={() => handleSidebarClick('list-item-5')}
//                 >
//                   <img src={TailwindsIcon} className="me-3" alt="Headwinds & Tailwinds" />
//                   Headwinds & Tailwinds
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-6' ? 'active' : ''}`}
//                   //href="#list-item-6"
//                   onClick={() => handleSidebarClick('list-item-6')}
//                 >
//                   <img src={MessageIcon} className="me-3" alt="Management Matters" />
//                   Management Matters
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-7' ? 'active' : ''}`}
//                   //href="#list-item-7"
//                   onClick={() => handleSidebarClick('list-item-7')}
//                 >
//                   <img src={FinanceIcon} className="me-3" alt="Financial X-ray" />
//                   Financial X-ray
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-8' ? 'active' : ''}`}
//                   //href="#list-item-8"
//                   onClick={() => handleSidebarClick('list-item-8')}
//                 >
//                   <img src={ValuationIcon} className="me-3" alt="Valuation" />
//                   Valuation
//                 </a>
//                 <a
//                   className={`list-group-item list-group-item-action ${activeSection === 'list-item-9' ? 'active' : ''}`}
//                   //href="#list-item-9"
//                   onClick={() => handleSidebarClick('list-item-9')}
//                 >
//                   <img src={TrophyIcon} className="me-3" alt="Competitor Check" />
//                   Competitor Check
//                 </a>
//               </div>
//             </Col>

//             <Col lg={9} className='p-0'>

//               <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example all-menus" tabIndex="0">
//                 <div id="list-item-1" ref={componentRefs.overview}>
//                   {overviewData.length > 0 && <OverView comname={companyName} data={overviewData} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-2" ref={componentRefs.priceChart}>
//                   <PriceChart />
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-3" ref={componentRefs.companyProfile}>
//                   {companyProfileData.length > 0 && <CompanyProfile comname={companyName} data={companyProfileData} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-4" ref={componentRefs.insight}>
//                   {industryInsideData.length > 0 && <Insight comname={companyName} data={industryInsideData} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-5" ref={componentRefs.headwinds}>
//                   {HEADWINDS_TAILWINDSData.length > 0 && <Headwinds comname={companyName} data={HEADWINDS_TAILWINDSData} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-6" ref={componentRefs.management}>
//                   {managementMattersData.length > 0 && <Managment comname={companyName} data={managementMattersData} compId={compId} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-7" ref={componentRefs.financial}>
//                   {financialXrayData.length > 0 && <Financial comname={companyName} data={financialXrayData} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-8" ref={componentRefs.valuation}>
//                   {valuationData.length > 0 && <Valuation comname={companyName} data={valuationData} />}
//                 </div>
//                 <hr className='w-100 my-5' />
//                 <div id="list-item-9" ref={componentRefs.competitor}>
//                   {competitorCheckData.length > 0 && <Competitor comname={companyName} data={competitorCheckData} />}
//                 </div>
//               </div>



//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Footer />
//     </>
//   );

// };

const UserData = () => {
  const { compId } = useParams(); // Extract compId from URL parameters
  const checkToken = localStorage.getItem("token");

  if (!checkToken) {
    const checkRole = localStorage.getItem("role");
  }
  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const [overviewData, setOverviewData] = useState([]);
  const [companyProfileData, setCompanyProfileData] = useState([]);
  const [industryInsideData, setIndustryInsideData] = useState([]);
  const [HEADWINDS_TAILWINDSData, setHEADWINDS_TAILWINDSData] = useState([]);
  const [managementMattersData, setManagementMattersData] = useState([]);
  const [financialXrayData, setFinancialXrayData] = useState([]);
  const [valuationData, setValuationData] = useState([]);
  const [competitorCheckData, setCompetitorCheckData] = useState([]);

  useEffect(() => {
    // Check if the page has already been refreshed in this session
    const hasRefreshed = sessionStorage.getItem("hasRefreshed");

    if (!hasRefreshed) {
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload(); // Reload the page once
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        // Replace this with your actual data fetch
        const response = await fetch(`${config.apiUrl}stock/${compId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${checkToken}` // Replace with actual token
          }
        });
        const result = await response.json();
        let res = result.data[0]

        setHEADWINDS_TAILWINDSData(res?.HEADWINDS_TAILWINDS)
        setCompanyProfileData(res?.companyProfile)
        setCompetitorCheckData(res?.competitorCheck)
        setFinancialXrayData(res?.financialXray)
        setIndustryInsideData(res?.industryInside)
        setManagementMattersData(res?.managementMatters)
        setOverviewData(res?.overview)
        setValuationData(res?.valuation)

        setCompanyName(res?.overview[0].company_name)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);

      }
    };

    fetchData();
  }, [])

  useEffect(() => {

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrolledPercent = (scrollPosition / totalHeight) * 100;

      console.log(scrolledPercent >= 100 ? 100 : Math.floor(scrolledPercent)); // here I want record of page scrolled
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isInWishList,setIsInWishList]=useState(false)

  const addToWishlistMethod = async (e) => {
    e.preventDefault(); // Prevent default button behavior

    try {
        // Replace with your API URL and token handling
        const apiUrl = `${config.apiUrl}wishlist`; 

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${checkToken}`, // Add JWT token for authentication
            },
            body: JSON.stringify({ companyId:compId }), // Send the company ID as request body
        });

        const result = await response.json();

        if (response.ok && result.status) {
            // Display success message
            toast.success(result.message);
            fetchWishlistData()
            //setIsInWishList(!isInWishList)
        } else {
            // Display error message
            toast.success(result.error || 'An error occurred.');
            fetchWishlistData()
           //setIsInWishList(!isInWishList)


        }
        fetchWishlistData()

    } catch (error) {
        console.error('Error adding/removing from wishlist:', error);
        toast.success('Internal Server Error. Please try again later.');
    }
};

const fetchWishlistData = async () => {

  try {
      // Replace with your API URL and token handling
      const apiUrl = `${config.apiUrl}wishlist`; 

      const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${checkToken}`, // Add JWT token for authentication
          },
      });

      const result = await response.json();

      if (response.ok && result.status) {
          // Display success message
          if(result.data.wishlists.length>0){

            for(let i=0;i<result.data.wishlists.length;i++){
              if(result.data.wishlists[i].companyId==compId){
                setIsInWishList(true)
              }
            }
          }
      }
  } catch (error) {
      console.error('Error adding/removing from wishlist:', error);
  }
};

useEffect(() => {

  fetchWishlistData()

},[])
  return (
    <>
    
      {loading && <div className="spinner-container">
        <Spinner animation="border" variant="primary" className="spinner" />
      </div>}
      <Header />
      <div className='user-data' >
        <Toaster/>
        <Container fluid className='my-3 pt-md-2 px-0'>
          <Row>
            <Col lg={3} style={{ position: "relative" }} className='p-0'>
              <div id="list-example" className="list-group list-group-sidebar" >
                <a className="list-group-item list-group-item-action" href="#list-item-1"><img src={HomeIcon} className='me-3' />Overview</a>
                <a className="list-group-item list-group-item-action" href="#list-item-2"><img src={PriceIcon} className='me-3' />Price Chart</a>
                <a className="list-group-item list-group-item-action" href="#list-item-3"><img src={CompanyIcon} className='me-3' />Company profile</a>
                <a className="list-group-item list-group-item-action" href="#list-item-4"><img src={InsightIcon} className='me-3' />Industry insights </a>
                <a className="list-group-item list-group-item-action" href="#list-item-5"><img src={TailwindsIcon} className='me-3' />Headwinds & Tailwinds </a>
                <a className="list-group-item list-group-item-action" href="#list-item-6"><img src={MessageIcon} className='me-3' />Management matters</a>
                <a className="list-group-item list-group-item-action" href="#list-item-7"><img src={FinanceIcon} className='me-3' />Financial X-ray</a>
                <a className="list-group-item list-group-item-action" href="#list-item-8"><img src={ValuationIcon} className='me-3' />Valuation</a>
                <a className="list-group-item list-group-item-action" href="#list-item-9"><img src={TrophyIcon} className='me-3' />Competitor check </a>
              </div>
            </Col>
            <Col lg={9} className='p-0'>
        <button className='logoutbtn mb-3' onClick={e=>{addToWishlistMethod(e)}}>{isInWishList?"Remove From Wishlist":"Add To Wishlist"}</button>

              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example all-menus" tabIndex="0">
                <div id="list-item-1"><OverView loading={loading} comname={companyName} data={overviewData} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-2"><PriceChart loading={loading} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-3"><CompanyProfile loading={loading} comname={companyName} data={companyProfileData} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-4"><Insight loading={loading} comname={companyName} data={industryInsideData} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-5"><Headwinds loading={loading} comname={companyName} data={HEADWINDS_TAILWINDSData} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-6"><Managment loading={loading} comname={companyName} data={managementMattersData} compId={compId} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-7"><Financial loading={loading} comname={companyName} data={financialXrayData} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-8"><Valuation loading={loading} comname={companyName} data={valuationData} /></div>

                <hr className='w-100 my-5' />
                <div id="list-item-9"><Competitor loading={loading} comname={companyName} data={competitorCheckData} /></div>

              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      
    </>
  );
};

export default UserData;

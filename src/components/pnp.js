import React, { useEffect, useState } from 'react';
import '../components/css/StockView.css';
import Header from './header';
import { Container, Row, Col } from 'react-bootstrap';
import Read from "../components/img/readCompany.svg";
import Footer from './Footer';

export default function Pnp() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, [10]);
  return (
    <>
      <Header />
      <div className="my-4 data-page">
        <Container>
          <h2 className="main-heading text-theme">Privacy & Policy</h2>
          <p>Welcome to Read Riches</p>

          <h3 className='heading2'>1) What Information Do We Collect?</h3>
          <h4 className='heading3'>a) Personal Information</h4>
          <p>
            The user expressly agrees and acknowledges that the company collects and stores
            personal information while providing services. When you sign up on the Web Site,
            we may collect the following information:
          </p>
          <ul>
            <li>User’s Name and Address.</li>
            <li>Email address, phone number and other contact information of the user.</li>
            <li>Other Information related to service enquiry, customer surveys and/or offers.</li>
            <li>Any other information necessitated to provide the users with desired services.</li>
          </ul>

          <p>
            It shall be the duty of the Users to make sure that the information and documents
            provided by them are true, correct, and current always. Users alone shall be
            responsible for any loss in any of any discrepancy, inaccuracy, obsolescence or
            falsity in such information or documents. The Company shall be at liberty to
            terminate or suspend any User’s access to the website or any of the services offered
            in such cases on its sole and exclusive discretion.
          </p>

          <h4 className='heading3'>b) Non-Personal Information Collected by Us</h4>
          <p>
            The user is aware that we automatically collect certain information about the user
            that cannot be used to personally identify the user. These types of information are:
            anonymous usage data, general demographic information, referring/exit pages and
            URLs, platform type, preferences you submit, etc.
          </p>

          <h3 className='heading2'>2) How We Use and Share the Information Collected?</h3>
          <h4 className='heading3'>Use</h4>
          <p>
            The user is aware that we use their information, unless otherwise prohibited by law
            or a contractual obligation, for the following purposes:
          </p>
          <ul>
            <li>
              <strong>Account singing up:</strong> We use your name, phone number, mobile number, etc. to
              register an account for you. The account will help you avail our services and in
              communicating with us.
            </li>
            <li>
              <strong>For maintaining internal records:</strong> For maintaining a proper record about our users
              and subscribers, we use information such as name, address, etc. provided by you.
            </li>
            <li>
              <strong>Improvement of services:</strong> We may use your email, preferences, etc. to improve our
              services by understanding the issues faced by you.
            </li>
            <li>
              <strong>Communication and customer service:</strong> We may use information such as your
              email id, phone number, etc. to provide customer support, send promotional
              messages, etc.
            </li>
          </ul>

          <h4 className='heading3'>Share</h4>
          <p>
            We consider protecting your personal information vital and we do not sell, trade, or
            rent your Personal Information to third parties without your consent. However, we
            may share your information in the following exceptional cases:
          </p>
          <ul>
            <li>
              We share your Personal Information with vendors and other third-party business tool
              providers who are performing services for us.
            </li>
            <li>
              Certain third-party service providers, such as payment processors, have their own
              privacy policies in respect of the information that we are required to share with them.
            </li>
            <li>
              We may share or disclose your personal information with our associate and
              subsidiary company.
            </li>
            <li>
              We may also share your information if required by the law or to respond to a legal
              process.
            </li>
          </ul>

          <h3 className='heading2'>3) How we Protect the Data?</h3>
          <p>
            The security of your personal data is important to us, we apply the best technology to
            protect this data. However, no method of transmission over the internet or electronic
            storage is 100% secure. Our information security practices include:
          </p>
          <ul>
            <li>SSL encryption designed to maintain the privacy of interaction between your browser and us.</li>
            <li>Firewall that protects from unauthorized electronic access to the server.</li>
            <li>While we strive to protect your personal data, we cannot provide a guarantee for its
absolute security.
</li>

          </ul>

          <p>
            The user credit or debit card information are not received or stored by us in any
            manner. This information is provided by you directly to the payment gateway which is
            authorized to handle such information.
          </p>

          <h3 className='heading2'>Links to other Websites and Web Pages</h3>
          <p>
            The Web Site contains links to websites and web pages outside its own domain and
            control. These links are only for the convenience and reference of users.
          </p>
          <p>
          When you click on such links, you navigate from the Web Site to such other websites
or web pages which are outside our control. The users of these websites and web
pages are governed by their own privacy policy, and the Company is not responsible
for any information provided to such websites and web pages by the user.
          </p>          <p>
          We do not provide any guarantee or warranty regarding such websites and web
pages or any information entered on such websites and web pages by the user.
Users are hereby advised to read the privacy policy of such websites and web pages
before browsing through them carefully.
          </p>
          <h3 className='heading2'>Cookie Policy</h3>
          <p>
            The user agrees that cookies are small files that are placed on a user’s computer
            system with their permission. Cookies help web applications treat and respond to
            every user differently according to their preferences and choices.
          </p>
          <p>The information gathered by cookies is only used for keeping track of traffic on the
Web Site to modify it according to user’s needs and is used for statistical analysis
purposes and is later deleted from the system. Cookies help us provide you with the
best browsing experience and do not give us access to your system in any way. You
may accept or decline cookies. Most browsers auto accept cookies but, you may
change that from browser settings. However, declining or disabling auto acceptance
of cookies may prevent you from experiencing best features of the Web Site.</p>

          <h3 className='heading2'>Your Choice About the Use of Your Data</h3>
          <p>
            You may choose not to provide us with certain data, but you might lose access to
            certain services provided by us or might not be able to access them at all.
          </p>
          <p>To stop receiving promotional communication from us you can unsubscribe the
mechanism in promotional communication you receive or can change the setting of
your email preference. Even when you change your email preference, you might
receive messages regarding the services, the administrative confirmation, update in
the services or update in the policy.</p>
<p>The browser or device you use may allow you to control cookies and other types of
local data storage. Your wireless device may also allow you to control whether
location or other data is collected and shared.</p>

<h3>Do not Track</h3>
          <p>
          When you choose to access the website or use our service, we use commonly-used
tools and cookies to recognize your visit, authenticate you, your location, etc.
Tracking is necessary to provide services requested by you. Tracking your use of the
website helps us serve you better and provide customized services and user
experience. We do not respond to Do Not Track signals now. You need to enable
JavaScript and cookies on your browser and ensure correct clock time set on your
computer/mobile phone to be able to use the system properly.
          </p>
        </Container>
      </div>
      <Footer />
    </>
  );
}

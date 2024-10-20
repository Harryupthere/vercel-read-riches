import React, { useEffect, useState } from 'react';
import '../components/css/StockView.css';
import Header from './header';
import { Container, Row, Col } from 'react-bootstrap';
import Read from "../components/img/readCompany.svg";
import Footer from './Footer';
export default function Tnc() {
  return (
    <>
      <Header />

      <div className='my-4 data-page'>
        <Container>
          <h1 className='main-heading text-theme'>Terms and Conditions</h1>

          <p>Welcome to Read Riches</p>
          <p>
            Thanks for using our products and services ("Services"). The Services are provided
            by WITS ANALYSIS PVT LTD. through its network of websites and domains at
            readriches.com ("Site"). By using our Services, you are agreeing to these terms.
            Please read them carefully and for the Disclaimer & Disclosures you can refer to the
            respective document          </p>

          <h2 className='heading2'>Terms</h2>
          <p>
            By accessing the Site, you are agreeing to be bound by our terms of service, all
            applicable laws and regulations, and agree that you are responsible for compliance
            with any applicable local laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials contained in this website
            are protected by applicable copyright and trademark law.
          </p>

          <h2 className='heading2'>Service License</h2>
          <p>
            a. Permission is granted to use the materials (information or software) on Site for
            personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on the Site;</li>
            <li>remove any copyright or other proprietary notations from the materials;</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>
            b. This license shall automatically terminate if you violate any of these restrictions
            and may be terminated by us at any time. Upon terminating your viewing of these
            materials or upon the termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed format.
          </p>

          <h2 className='heading2'>No Refund Policy</h2>
          <p>
            All subscription purchases made on our website are final and non-refundable. We
            do not offer refunds or credits for any partial or unused subscription periods,
            including but not limited to cases where users fail to cancel before the renewal date
            or stop using the service before the subscription term ends. By subscribing, you
            acknowledge that all sales are final and agree to this no refund policy. In case of
            any billing disputes, please contact our support team, and we will do our best to
            assist within the limits of our policy.
          </p>
          <h2 className='heading2'>No Cancellation Policy</h2>
          <p>
            Once a subscription is purchased, it cannot be canceled before the end of the
            subscription term. The subscription will remain active for the entire duration of the
            term you selected. You may, however, choose to turn off auto-renewal for the next
            billing cycle by managing your account settings. This must be done before the
            renewal date to avoid further charges. Please note, early termination of access
            does not entitle you to a refund or credit for any unused time.
          </p>
          <h2 className='heading2'>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the
            laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in
            Lucknow, Uttar Pradesh.
          </p>
        </Container>
      </div>

      <Footer />
    </>
  );
}

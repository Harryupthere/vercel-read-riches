import React, { useEffect, useState } from 'react';
import '../components/css/StockView.css';
import Header from './header';
import { Container, Row, Col } from 'react-bootstrap';
import Read from "../components/img/readCompany.svg";
import Footer from './Footer';

export default function Dnd() {
  
  return (
    <>
      <Header />


      <div className='my-4 data-page'>
        <Container>
          <h2 className='main-heading text-theme  mb-3'>
          Disclaimer & Disclosures 
          </h2>
          <p>The research presented under Read Riches has been prepared by WITS ANALYSIS
PVT LTD. It is provided for informational purposes only and should not be
considered investment, legal or tax advice. It does not constitute or form part of, and
shall under no circumstances be considered as, an offer to sell or a solicitation of an
offer to purchase or sell any relevant financial instruments (i.e. financial instruments
mentioned herein or other financial instruments of any issuer mentioned herein
and/or options, warrants, rights, or other interests with respect to any such financial
instruments) (‘Relevant Financial Instruments’).</p>
<p>This research has been prepared and solely based on publicly available information
that WITS ANALYSIS PVT LTD. considers to be reliable but WITS ANALYSIS PVT
LTD. has not independently verified the contents hereof. While reasonable care has
been taken to ensure that its contents are not untrue or misleading, no
representation or warranty, express or implied, is made as to, and no reliance should
be placed on, the fairness, accuracy, completeness or reasonableness of the
information, opinions and projections contained in this research information and
WITS ANALYSIS PVT LTD. accept no liability whatsoever for any direct or
consequential loss, including without limitation any loss of profits, arising from
reliance on this research information.</p>
<p>WITS ANALYSIS PVT LTD. is not a SEBI registered advisor. The opinions
expressed herein are the opinions of the research analysts and reflect their opinion
as of the date hereof. These opinions are subject to change and WITS ANALYSIS
PVT LTD. does not undertake to notify any recipient of this research report of any
such change nor of any other changes related to the information provided in this
research report. This report has been furnished to you for your general information
only and should not be reproduced, re-circulated, published in any media, website or
otherwise, in any form or manner, in part or, without the express consent in writing of
WITS ANALYSIS PVT LTD. This Research is meant solely for use by the original
recipient to whom it is sent/has access and is not for circulation. Any unauthorized
use, disclosure or public dissemination or copying of information (either whole or
partial) contained herein is prohibited.</p>

<p>All opinions, news, investigations, analyses, prices or other information or
statements offered by WITS ANALYSIS PVT LTD. are provided in the form of
general remarks and comments. They do not constitute investment advice. WITS
ANALYSIS PVT LTD. assumes no liability for loss or damage, including, but not
limited to, lost profits that may result directly or indirectly from the use or reliance on
the abovementioned opinions, news, investigations, analyses, prices, or other
information offered by the company.

</p><p>All the investment forms described here involve large financial risk. The past
performance of a security, an industry, a sector, a market, a financial product, a
trading strategy, or the individual trade does not guarantee any future results or
returns. As an investor, you yourself bear the full responsibility for your individual
investment decisions. Such decisions should be based on an assessment of your
financial situation, your investment objectives, your risk tolerance, and your liquidity
need and should be discussed in advance with your personal financial advisor in
case of doubt.</p>


<p>WITS ANALYSIS PVT LTD. and its connected affiliates, and their respective
Directors, Officers, and employees or their relative, may have a long or short position
in the subject companies mentioned in the report and it may not be construed as
potential conflict of interest with respect to any recommendation and related
information and opinions.</p>



<p>The research information on Read Riches which is owned by WITS ANALYSIS PVT
LTD. is not for public distribution and has been furnished solely for information and
must not be reproduced or redistributed to others. None can use the report as a base
for any claim, demand, or cause of action and, also none is responsible for any loss
incurred based upon. The investments discussed or recommended in this report may
not be suitable for all investors. Opinion expressed is the current opinion as of the
date appearing on the material only. It does not constitute and cannot replace
investment advice. We therefore recommend that you contact your personal financial
advisor before carrying out specific transactions and investments.</p>



<p>Further, the information on the website has been obtained based on publicly
available information; internal data and other sources believed to be true and are for
general guidance only but which may have not been verified independently. While
every effort is made to ensure the accuracy and completeness of information
contained, the company takes no responsibility and assumes no liability for any
error/ omission or accuracy of the information. Recipients of this material should rely
on their own judgments and conclusions from relevant sources before making any
investment. The research on website is not intended to be a complete statement or
summary of the securities, market or developments referred to in this document.
WITS ANALYSIS PVT LTD. or its affiliates or employees are under no obligation to
update the information. WITS ANALYSIS PVT LTD. Or its affiliates or employees
shall not be in any way responsible and liable for any loss or damage that may arise
to any person from any error in the information contained in this report.</p>



<p>All the investment forms described here involve large financial risk. The past
performance of a security, an industry, a sector, a market, a financial product, a
trading strategy, or the individual trade does not guarantee any future results or
returns. As an investor, you yourself bear the full responsibility for your individual
investment decisions. Such decisions should be based on an assessment of your
financial situation, your investment objectives, your risk tolerance, and your liquidity
need and should be discussed in advance with your personal financial advisor in
case of doubt.</p>




<p>Note: “Investment in securities market is subject to market risks. Read all the related
documents carefully before investing”</p>

        </Container>
      </div>
      <Footer />
    </>
  );
}

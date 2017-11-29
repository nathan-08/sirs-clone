import React, { Component } from 'react'
import './home.css'
import columnPic from './img/pillars-and-steps.jpg'
import seal from './img/CAMS_SEAL.gif'
import MediaQuery from 'react-responsive';

export default class Home extends Component {
    render() {
        return (
            <div className='Component'>

                <div className='blue-box'>
                    <div className='left-side'>
                        <h3>SIRS Third-party Access ("TPA" or "D3P") Compoliance Services</h3>
                        <br />
                        <p>"The government's view of th eeconomy could be summed up in a few short phrases: If it moves, tax it. If it keeps moving, regulate it. And if it stops moving, subsidize it." </p>
                        <br />
                        <p style={{ 'text-align': 'right' }}>~Ronald Reagan</p>
                    </div>
                    <div className='column-pic'>

                    </div>
                </div>
                <div className='content'>
                    <div className='leftCol'>
                        <MediaQuery query='(max-width: 800px)'>
                            <div>small screen</div>
                        </MediaQuery>
                        <br />
                        <h2>REGULATORY NOTICES</h2>
                        <p>
                            <a href="http://www.finra.org/sites/default/files/2017-regulatory-and-examination-priorities-letter.pdf" target="_blank">FINRA’s 2017 Regulatory and Examination Priorities Letter</a>
                        </p>
                        <h5>
                            (1/4/2017) FINRA announced that its 2017 examinations “will continue to focus on firms’ anti-money laundering programs….”
                        </h5>
                        <p>
                            <a href="https://www.fincen.gov/sites/default/files/2017-01/Western%20Union%20PR%20Final_0.pdf" target="_blank">Western Union Fined $184MM</a>
                        </p>
                        <h5>
                            January 19, 2017, FinCEN Fined Western Union Financial Services, Inc. for Past
Violations of Anti-Money Laundering Rules In Coordinated
Action with DOJ and FTC
                        </h5>
                        <p><a href="https://www.fincen.gov/sites/default/files/2017-07/BTC-e%20July%2026%20Press%20Release%20FINAL1.pdf" target="_blank">FinCEN Fines Virtual Currency Exchange $110 Million</a>
                        </p>
                        <h5>On July 26, 2017, FinCEN assessed a $110 million civil money penalty against BTC-e for willfully violating U.S. anti-money laundering laws. BTC-e is an internet-based, foreign-located, virtual currency exchange.”
                            </h5>
                        <p>
                            <a href="https://www.fincen.gov/whatsnew/pdf/20151230.pdf" target="_blank">FinCEN Assesses Penalty against Precious Metals Dealer</a>
                        </p>
                        <h5>
                            In this December 2015 Press Release, FinCEN announced the assessment of a $200,000 civil money penalty against a Los Angeles precious metals business.
                            </h5>

                    </div>
                    <div className='rightCol'>
                        <h3>SIRS' AML Compliance Services</h3>
                        <h4>31 CFR Chapter X</h4><p> requires each financial institution to develop and implement a written anti-money laundering
                        compliance program. At a minimum, each institution's AML compliance program must:
                    </p>
                        <ul>
                            <li>Incorporate policies, procedures, and internal controls that include provisions for complying with th eapplicable requirements of the BSA;</li>
                            <li>Designate an AML Compliance Officer;</li>
                            <li>Provide for on-going training of empoyees; and</li>
                            <li>Provide for independent testing of the firm's AML program.</li>
                        </ul>
                        <p>
                            To address these regulatory requirements, SIRS offers comprehensive AML compliance services for many non-bank
                            financial institutions (including securities broker/dealers, mortgage lenders, MSBs, and others).
                        </p>
                        <h3>
                            Compliance Programs (written policies and procedures)
                        </h3>
                        <p>
                            SIRS has developed AML compliance programs for many of the non-bank financial institutions regulated by the BSA. Each of SIRS’ industry-specific AML compliance
                            programs includes the written policies, procedures, and internal controls required by BSA regulations.
                        </p>
                        <h3>
                            Training
                        </h3>
                        <p>
                            SIRS' AML Training presentations are tailored to address key BSA criteria for each business type (ex: MSB, broker/dealer, mortgage, precious metals, etc.).
                        These presentations can be shown to an institution's employees to satisfy the firm's obligations to provide AML training.
                        </p>
                        <h3>
                            Independent Testing
                        </h3>
                        <p>
                            Based on guidance provided by FinCEN, FFIEC, FATF and other regulatory authorities, SIRS' Independent AML Testing provides a comprehensive review of a firm's AML compliance program.
                            In conducting the test, SIRS will work as your partner to address any identified deficiencies. In many instances, these issues can be resolved before the test is completed (allowing for a cleaner test report).
                            After the test is completed, you will receive a detailed report that highlights the strengths of your program and identifies steps that can be taken to address any unresolved deficiencies.
                        </p>
                        <h4>
                            Scope of Testing:
                        </h4>
                        <p>
                            SIRS' Independent AML Testing includes a comprehensive review of your firm's AML compliance program.
                            Our test addresses each of the applicable points of the Bank Secrecy Act. Following is a list of areas that are typically covered by our review:
                        </p>
                        <ul>
                            <li>
                                Overall integrity and effectiveness of your firm's AML compliance program;
                            </li>
                            <li>
                                Firm designation of an AML Compliance Officer;
                            </li>
                            <li>
                                Senior management approval of the firm's AML compliance program;
                            </li>
                            <li>
                                Monitoring for and detection of suspicious activities;
                            </li>
                            <li>
                                Firm CIP (when applicable);
                            </li>
                            <li>
                                BSA reporting and recordkeeping;
                            </li>
                            <li>
                                Information sharing with law enforcement and other financial institutions;
                            </li>
                            <li>
                                Firm handling of FinCEN 314(a) requests;
                            </li>
                            <li>
                                Independent testing of your firm's AML compliance program; and
                            </li>
                            <li>
                                Staff training.
                            </li>
                        </ul>
                        <h3>
                            Electronic Delivery of AML Program Files
                        </h3>
                        <p>
                        Using cloud server technology, a financial institution will upload its files to a secure, online file server. SIRS will then review these files to test the institution's AML program. Phone and email communications with firm management allow SIRS to easily address any issues that may arise throughout the testing process. This use of modern communication and information sharing technologies eliminates travel time and costs and allows SIRS to perform its review in a highly efficient and cost-effective manner.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
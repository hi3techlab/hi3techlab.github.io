import ACORN from "./../../../assets/images/home/sponsors/ACORN.png";
import ACS from "./../../../assets/images/home/sponsors/ACS.png";
import BDH from "./../../../assets/images/home/sponsors/BDH.png";
import IFS from "./../../../assets/images/home/sponsors/IFS.png";
import NIH from "./../../../assets/images/home/sponsors/NIH.png";
import NSF from "./../../../assets/images/home/sponsors/NSF.png";
import Prisma from "./../../../assets/images/home/sponsors/Prisma.png";
import UofSC from "./../../../assets/images/home/sponsors/UofSC.png";
import USTAR from "./../../../assets/images/home/sponsors/USTAR.png";
import './OurSponsors.css';

const OurSponsors = () => {
    return (
        <div className="sponsors-container"> 
            {/*Heading our sponsors*/}
            <p className = "header">
                Our Sponsors
            </p>
            <div className="sponsors">
                <div className="sponsorImage">
                    <img src={NIH} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={ACS} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={NSF} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={Prisma} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={UofSC} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={USTAR} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={ACORN} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={BDH} className = "sponsor-image" alt="logo" />
                </div>

                <div className="sponsorImage">
                    <img src={IFS} className = "sponsor-image" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default OurSponsors;
/* 

sophie's template, didn't see this before doing a different way, but may change to be more efficient
import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Logo2 from "./../../assets/images/home/Logo2.png";

const header = "Our Sponsors";

const OurSponsors = () => {
    return(
        <div className="ourSponsorsSection">
            <p className="header">
                {header}
            </p>

            {/* Using a table }
            {/* <table>
                <tr> 
                    <td> Sponsor 1 </td>
                    <td> Sponsor 2 </td>
                </tr>
                <tr>
                <td> Sponsor 3 </td>
                <td> Sponsor 4 </td>  
                </tr>
            </table> }

            {/* Using a Container from react-grid-system}
            <Container>
                <Row>
                    <Col sm={2.4}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={2.4}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={2.4}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={2.4}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={2.4}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={3}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={3}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                    <Col sm={3}>
                    <img src={Logo2} className="fillerImage" alt = "logo2" class="center" width='100%' height="100%" /> {/* make width screen size * 2 / 12 }
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default OurSponsors; */
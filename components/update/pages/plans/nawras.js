import { Container } from "@mui/material";
import Image from "next/image";
import bird from "../../public/images/white-stork-airplane.png";
import drone from "../../public/images/drone.svg";
import hour from "../../public/images/zone.svg";
import flag from "../../public/images/flags.svg";
import hired from "../../public/images/magnifying-glass.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Link from "next/link";
import Head from "next/head";
import Faq from "../../components/shared/Faq";

const Nawras = () => {
  return (
    <>
      <Head>
        <title>Tahleeq | Nawras</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/purple logo.svg" />
      </Head>

      <div className="nawras">
        <Container fixed>
          <div className="plan">
            <h2>NAWRAS Plan</h2>

            <p>
              This package is for pilots who wants to fly with a business plan
            </p>
          </div>
        </Container>

        <Image className="birdImage" src={bird} alt="bird" height={900} />

        <Container fixed>
          <div className="whatIn">
            <h3>What’s In NAWRAS?</h3>

            <div className="cards">
              <div className="card">
                <div className="box">
                  <Image
                    className="icon"
                    src={drone}
                    alt="new"
                    height={50}
                    width={50}
                  />
                </div>

                <p>
                  1 <sup>St</sup> Drone
                </p>
                <p>Free</p>
                <p>Registration</p>
              </div>

              <div className="card">
                <div className="box">
                  <Image
                    className="icon"
                    src={hour}
                    alt="new"
                    height={50}
                    width={50}
                  />
                </div>

                <p>20 Hours </p>
                <p>Flights Per </p>
                <p>Month</p>
              </div>

              <div className="card">
                <div className="box">
                  <Image
                    className="icon"
                    src={flag}
                    alt="new"
                    height={60}
                    width={60}
                  />
                </div>

                <p>Photography &</p>
                <p>Drone Racing </p>
                <p>Missions</p>
              </div>

              <div className="card hiringCard">
                <div className="box">
                  <Image
                    className="icon"
                    src={hired}
                    alt="new"
                    height={50}
                    width={50}
                  />
                </div>

                <p className="hired">Can Be </p>
                <p className="hired">Hired</p>
              </div>
            </div>
          </div>
          <div className="details">
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Details</h3>
              </AccordionSummary>
              <AccordionDetails className="wrap-box">
                <ul>
                  <li>
                    <p>Free registration for one drone only.</p>
                  </li>
                  <li>
                    <p>A flight time of 20 hours per month is included. </p>
                  </li>

                  <li>
                    <p>Missions included: Photography and drone racing only.</p>
                  </li>

                  <li>
                    <p>Flying in a safe zone is included.</p>
                  </li>

                  <li>
                    <p className="soon">
                      The pilot can be hired (this feature will be added soon).
                    </p>
                  </li>

                  <li>
                    <p>
                      Extra flying time can be added as{" "}
                      <Link href={"./"}> Add-Ons</Link> .
                    </p>
                  </li>

                  <li>
                    <p>You can upgrade your plan.</p>
                  </li>

                  <li>
                    <p>The subscription is valid for one month only. </p>
                  </li>

                  <li>
                    <p> Prices are inclusive of 5% VAT.</p>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="subscribe">
            <button className="570px:normal-case">SUBSCRIBE NOW</button>
          </div>

          <Faq />
        </Container>
      </div>
    </>
  );
};

export default Nawras;

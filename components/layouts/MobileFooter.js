import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

const MobileFooter = () => {
  return (
    <div className="bg-[#420172]">
      <Accordion
        sx={{
          backgroundColor: "#420172",
          paddingY: "8px",
          marginX: "12px !important",
          borderBottom: "1px solid rgba(255 , 255 , 255 , 0.20) !important",
          marginY: "0px !important",
          boxShadow: "none !important",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            paddingX: "0px !important",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              letterSpacing: "-0.19px",
              lineHeight: "2.5rem",
              color: "#fff",
            }}
          >
            About SERB
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "0px !important",
            paddingBottom: "20px !important",
          }}
        >
          <ul>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/about">Who we are</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/about">What we do</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/news">Articles</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "#420172",
          paddingY: "8px",
          marginX: "12px !important",
          borderBottom: "1px solid rgba(255 , 255 , 255 , 0.20) !important",
          marginY: "0px !important",
          boxShadow: "none !important",
          "&::before": {
            background: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            paddingX: "0px !important",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              letterSpacing: "-0.19px",
              lineHeight: "2.5rem",
              color: "#fff",
            }}
          >
            Popular Pages
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "0px !important",
            paddingBottom: "20px !important",
          }}
        >
          <ul>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/plans">Plans</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/airpass">AirPass</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="/add-ons">Add-ons</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "#420172",
          paddingY: "8px",
          marginX: "12px !important",
          borderBottom: "1px solid rgba(255 , 255 , 255 , 0.20) !important",
          marginY: "0px !important",
          boxShadow: "none !important",
          "&::before": {
            background: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            paddingX: "0px !important",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              letterSpacing: "-0.19px",
              lineHeight: "2.5rem",
              color: "#fff",
            }}
          >
            Contact Us
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "0px !important",
            paddingBottom: "20px !important",
          }}
        >
          <ul>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="mailto:support@serbglobal.com">support@serbglobal.com</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px] leading-[2.563rem]">
              <a href="tel:+96898841884">+968 98841884</a>
            </li>
            <li className="text-base text-white/75 -tracking-[0.19px]">
              Civil Aviation Authority, Muscat Sultanate of Oman
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <div className="flex items-center justify-center gap-5 py-5 border-b border-b-white/20 mx-3">
        <a
          href="https://x.com/serbglobal?s=21&t=GBZ48L5RatruvQx0h4MzNQ"
          target="_blank"
        >
          <RiTwitterXFill size={30} className="cursor-pointer text-white" />
        </a>
        <a
          href="https://instagram.com/serbglobal?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
          <AiOutlineInstagram size={32} className="cursor-pointer text-white" />
        </a>
        <a href="https://www.youtube.com/@serbglobal_" target="_blank">
          <AiFillYoutube size={30} className="cursor-pointer text-white" />
        </a>
        <a href="https://www.linkedin.com/company/serbglobal/" target="_blank">
          <RiLinkedinFill size={30} className="cursor-pointer text-white" />
        </a>
      </div>
      <div className="flex items-center justify-center py-6 border-b border-b-white/20 mx-3">
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1rem",
            fontFamily: "Arimo, sans-serif !important",
          }}
        >
          SERB company © 2023
        </Typography>
      </div>
      <div className="flex items-center justify-between py-4 mx-3">
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Arimo, sans-serif !important",
          }}
        >
          <Link href="/privacy-policy" key="privacy-policy">
            <a
              style={{
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              Privacy Policy
            </a>
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Arimo, sans-serif !important",
          }}
        >
          <Link href="/terms-and-conditions" key="terms-and-conditions">
            <a
              style={{
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              Terms {"&"} Conditions
            </a>
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default MobileFooter;

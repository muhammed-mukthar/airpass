import { Box, Container } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#430073", paddingY: "12px" }}>
      <Container fixed disableGutters={false} style={{ padding: "0 0.5rem" }}>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#fff" }}>
              <Link href="/">
                <a
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "Medium",
                  }}
                >
                  SERB Homepage
                </a>
              </Link>
            </Typography>
            <Typography sx={{ color: "#fff" }}>
              <Link href="/" style={{ color: "#fff", fontSize: "80px" }}>
                <a
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "Medium",
                  }}
                >
                  Privacy Policy
                </a>
              </Link>
            </Typography>
            <Typography sx={{ color: "#fff" }}>
              <Link href="/" style={{ color: "#fff", fontSize: "80px" }}>
                <a
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "Medium",
                  }}
                >
                  Terms {"&"} Conditions
                </a>
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", columnGap: "10px" }}
          >
            <Link href="https://twitter.com">
              <a target="_blank">
                <TwitterIcon
                  sx={{ color: "#fff", fontSize: "25px", cursor: "pointer" }}
                />
              </a>
            </Link>
            <Link href="https://instagram.com">
              <a target="_blank">
                <InstagramIcon
                  sx={{
                    color: "#fff",
                    fontSize: "25px",
                    cursor: "pointer",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </Link>
            <Link href="https://youtube.com">
              <a target="_blank">
                <YouTubeIcon
                  sx={{
                    color: "#fff",
                    fontSize: "25px",
                    cursor: "pointer",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </Link>
            <Link href="https://linkedin.com">
              <a target="_blank">
                <LinkedInIcon
                  sx={{
                    color: "#fff",
                    fontSize: "25px",
                    cursor: "pointer",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </Link>
          </Box>
        </Box> */}
        <div className="flex items-center justify-between">
          <ul className="flex items-center text-white 570px:hidden">
            <li className="mr-4">
              <Link href="/">SERB Home Page</Link>
            </li>
            <li className="mr-4">Privacy Policy</li>
            <li className="mr-4">Terms & conditions</li>
          </ul>
          <ul className="flex items-center text-white 570px:w-full 570px:justify-end">
            <li className="mr-3">
              <TwitterIcon fontSize="medium" />
            </li>
            <li className="mr-3">
              <InstagramIcon fontSize="medium" />
            </li>
            <li className="mr-3">
              <YouTubeIcon fontSize="medium" />
            </li>
            <li>
              <LinkedInIcon fontSize="medium" />
            </li>
          </ul>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;

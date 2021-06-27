import { useState } from "react";
import { Card, FormControl, Button } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import {
  FooterIcon,
  FooterBody,
  AdList,
  TopList,
  FormSub,
} from "../../../styles/pages/footer";

const Footer = () => {
  const [email, setEmail] = useState("");

  const Subscribe = () => {
    console.log(email);
  };

  return (
    <FooterBody style={{ bottom: "0" }}>
      <Card style={{ width: "100%", backgroundColor: "#4b3049" }}>
        <Card.Body>
          <Card.Title style={{ color: "#b097bd" }}>Purplemart</Card.Title>
          <div className="pt-4">
            <FormSub className="d-flex">
              <FormControl
                type="search"
                placeholder="Your e-mail"
                className="mr-2"
                aria-label="Search"
                style={{ borderRadius: "25px", zIndex: 1 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="btn btn-success"
                style={{
                  width: "auto",
                  borderRadius: "25px",
                  marginLeft: "-50px",
                  zIndex: 10,
                }}
                onClick={Subscribe}
              >
                Subscribe
              </Button>
            </FormSub>
          </div>
          <div className="pt-4">
            <Card.Text style={{ color: "#b097bd" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </div>

          <div className="pt-4">
            <div className="row">
              <div className="col">
                <TopList>
                  <AdList head="true">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Partnership
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Website
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Social Media
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Branding
                    </a>
                  </AdList>
                </TopList>
              </div>
              <div className="col">
                <TopList>
                  <AdList head="true">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      About
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Our project
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Career
                    </a>
                  </AdList>
                </TopList>
              </div>
              <div className="col">
                <TopList>
                  <AdList head="true">
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Support
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Support Request
                    </a>
                  </AdList>
                  <AdList>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Contact
                    </a>
                  </AdList>
                </TopList>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Card.Subtitle className="mb-2 text-muted">
              Connect with us
            </Card.Subtitle>
          </div>
          {/* <thread> */}
          <div style={{ flexDirection: "row", display: "flex" }}>
            <Card.Link href="https://www.facebook.com/">
              <FooterIcon>
                <AiFillFacebook />
              </FooterIcon>
            </Card.Link>

            <Card.Link href="#">
              <FooterIcon>
                <AiFillInstagram style={{ color: "#DC3538" }} />
              </FooterIcon>
            </Card.Link>

            <Card.Link href="#">
              <FooterIcon>
                <AiFillYoutube style={{ color: "#FF0000" }} />
              </FooterIcon>
            </Card.Link>

            <Card.Link href="#">
              <FooterIcon>
                <HiMail style={{ color: "#FF0000" }} />
              </FooterIcon>
            </Card.Link>
          </div>
          {/* </thread> */}
        </Card.Body>
      </Card>
    </FooterBody>
  );
};
export default Footer;

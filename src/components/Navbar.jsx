import "./style.css";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { MdSearch } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

function HeaderMenu() {
  return (
    <Navbar expand="lg" className="w-full sticky-top bg-white" >
      <Container fluid className="max-w-screen-xl">
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Brand href="#">
          {/* <img className="h-10 max-w-40 ml-5 mt-1" src={Logo} alt="Logo" /> */}
          <h1 className="h-10 max-w-40 ml-5 mt-1 font-semibold text-[#004743]" >Fashion <span className="text-[#fbd103]" >Era</span></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 ml-10 text-sm font-semibold text-center gap-3"
            navbarScroll
          >
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
              }}
            >
              Coat/Pent
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
              }}
            >
              Sherwani
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
              }}
            >
              Kurta/Shalwar
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
              }}
            >
              Sale
            </Button>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-2 navbar-end align-items-center">
            <div style={{ position: "relative" }}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  width: "200px",
                  borderBottom: "1px solid black",
                  height: "35px",
                  boxShadow: "none",
                }}
              >
                <InputBase
                  sx={{ ml: 3, flex: 1 }}
                  placeholder="ᴛʏᴘᴇ ᴛᴏ ꜱᴇᴀʀᴄʜ..."
                  inputProps={{ '"Ubuntu", sans-serif': "Enter Your Mail" }}
                />
                <IconButton
                  type="button"
                  sx={{
                    position: "relative",
                    marginTop: "3px",
                    left: "5px",
                  }}
                  aria-label="search"
                >
                  <MdSearch className="text-xl" />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Paper>
            </div>
            <div className="flex justify-center ml-3 gap-1">
              <Nav.Link>
                <FaCartShopping className="text-xl" />
              </Nav.Link>
              <Nav.Link>
                <GiSelfLove className="text-xl" />
              </Nav.Link>
              <Nav.Link>
                <FaRegUser className="text-xl" />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;

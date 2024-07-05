import "./style.css";
import Container from "react-bootstrap/Container";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { auth } from "../Firebase/firebase";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

function HeaderMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <Navbar expand="lg" className="w-full sticky-top bg-white main-navbar-div">
      <Container fluid className="max-w-screen-2xl">
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Brand>
          <NavLink to="/" className="no-underline">
            {" "}
            <h1 className="h-10 max-w-40 mt-1 font-semibold text-[#004743]">
              Fashion <span className="text-[#fbd103]">Era</span>
            </h1>{" "}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 ml-5 text-sm font-semibold text-center gap-3 pt-1 navbar-links"
            navbarScroll
          >
            <NavLink to="/coat" className="no-underline text-black">
              Coat Pent
            </NavLink>
            <NavLink to="/sherwani" className="no-underline text-black">
              Sherwani
            </NavLink>
            <NavLink to="/kurta" className="no-underline text-black">
              Kurta Pajama
            </NavLink>
            <NavLink to="/about" className="no-underline text-black">
              About
            </NavLink>
            <NavLink to="/contact" className="no-underline text-black">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-2 navbar-end align-items-center">
            <div className="flex justify-center ml-3 gap-1">
              <Nav.Link>
                <FaCartShopping className="text-xl" />
              </Nav.Link>
              <Nav.Link>
                <GiSelfLove className="text-xl" />
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/signup" className="no-underline text-black">
                  <FaRegUser className="text-xl" />
                </NavLink>
              </Nav.Link>
            </div>
            {isLoggedIn && (
              <Button
                variant="contained"
                className="logout-button"
                onClick={handleLogout}
              >
                {" "}
                <RiLogoutCircleRLine className="text-2xl mr-2" /> Log Out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;

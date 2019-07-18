import React, { Component } from "react";
import { NavBar } from "./NavBar";

/**
 * Richard Connell 5/22/19
 * The Navbar Component in this demo consists of a generic navbar with no links at the moment.
 * The purpose is to show the sticky and resizing feature.
 *
 * I use ComponentDidMount to track the scrolling of the browser to trigger the conditional
 * resize function.
 *
 * Note:  Responsivness was tested in the chrome browser and passed.  The small logos
 * do not show in IE due to the fact they are .ico files.  This could be changed later.
 * This was not tested on mobile devices, but I can easily add the proper media queries
 * if needed.
 */

class NavBarComponent extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200;

    if (distanceY > shrinkOn) {
      /** Conditional statement to control specific element's visibility. */
      document.getElementById("smalllogo1").style.visibility = "visible";
      document.getElementById("smalllogo2").style.visibility = "visible";
      document.getElementById("smalllogo3").style.visibility = "visible";
      document.getElementById("ham").style.visibility = "visible";
      document.getElementById("onToggle").style.visibility = "visible";
      document.getElementById("link1").style.visibility = "hidden";
      document.getElementById("link2").style.visibility = "hidden";
      document.getElementById("link3").style.visibility = "hidden";
      document.getElementById("link4").style.visibility = "hidden";
    } else {
      document.getElementById("smalllogo1").style.visibility = "hidden";
      document.getElementById("smalllogo2").style.visibility = "hidden";
      document.getElementById("smalllogo3").style.visibility = "hidden";
      document.getElementById("ham").style.visibility = "hidden";
      document.getElementById("onToggle").style.visibility = "hidden";
      document.getElementById("link1").style.visibility = "visible";
      document.getElementById("link2").style.visibility = "visible";
      document.getElementById("link3").style.visibility = "visible";
      document.getElementById("link4").style.visibility = "visible";
    }
  }

  render() {
    return (
      <NavBar>
        <img
          src="favicon.ico"
          id="smalllogo1"
          alt="logo"
          style={{ paddingRight: "10px", visibility: "hidden" }}
        />

        <img
          src="favicon.ico"
          id="smalllogo2"
          alt="logo"
          style={{ paddingRight: "10px", visibility: "hidden" }}
        />

        <img
          src="favicon.ico"
          id="smalllogo3"
          alt="logo"
          style={{ paddingRight: "10px", visibility: "hidden" }}
        />
        <a id="link1" href="www.google.com" style={{ paddingLeft: "50px" }}>
          Home
        </a>
        <a id="link2" href="www.google.com" style={{ paddingLeft: "150px" }}>
          About
        </a>
        <a id="link3" href="www.google.com" style={{ paddingLeft: "250px" }}>
          Services
        </a>
        <a id="link4" href="www.google.com" style={{ paddingLeft: "350px" }}>
          Contact
        </a>

        <div className="ham-menu-wrap">
          <input type="checkbox" className="toggler" id="onToggle" />
          <div className="hamburger" id="ham">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="www.google.com">Home</a>
                  </li>
                  <li>
                    <a href="www.google.com">About</a>
                  </li>
                  <li>
                    <a href="www.google.com">Services</a>
                  </li>
                  <li>
                    <a href="www.google.com">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
    );
  }
}

export default NavBarComponent;

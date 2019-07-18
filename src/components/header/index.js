import React, { Component } from "react";
import { Header } from "./Header";

/**
 * Richard Connell 5/22/19
 * The Header Component in this demo consists of a generic company logo.
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

class HeaderComponent extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200;

    if (distanceY > shrinkOn) {
      /** Conditional statement to control specific element's visibility. */
      document.getElementById("mainHeader").style.visibility = "hidden";
    } else {
      document.getElementById("mainHeader").style.height = "210px";
      document.getElementById("mainHeader").style.visibility = "visible";
      document.getElementById("mainHeader").style.backgroundcolor = "lightgray";
    }
  }

  render() {
    return (
      <Header id="mainHeader">
        <div>
          <img id="minilogo" src="generic-logo.jpg" alt="logo" />
        </div>
      </Header>
    );
  }
}

export default HeaderComponent;

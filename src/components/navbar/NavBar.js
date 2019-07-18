import styled from "styled-components";

/* Main Nav Styles */
export const NavBar = styled.nav`
  color: black !important;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;
  background-color: black;
  height: 70px;
  background-color: black;
  background-image: linear-gradient(
    rgb(220, 200, 200, 0.3) 0.01em,
    transparent 0.1em
  );
  background-size: 100% 0.3em;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  text-align: center;
  margin-left: 10 auto;
  align-content: center;
  position: sticky;
  box-sizing: border-box;
  overflow-x: hidden;
  top: 0;
  width: 100%;
  #link1 {
    position: absolute;
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
    overflow-x: hidden;
    visibility: visible;
  }
  #link2 {
    position: absolute;
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
    overflow-x: hidden;
    visibility: visible;
  }
  #link3 {
    position: absolute;
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
    overflow-x: hidden;
    visibility: visible;
  }
  #link4 {
    position: absolute;
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
    overflow-x: hidden;
    visibility: visible;
  }
  /* Style Constants */
  :root {
    --primary-color: grey;
    --overlay-color: darkgrey;
    --menu-speed: 0.75s;
  }

  .btn {
    display: inline-block;
    border: none;
    background: var(--primary-color);
    color: #fff;
    padding: 0.75rem 1.5rem;
    margin-bottom: 10px;
    margin-top: 1rem;
    transition: opacity 1s ease-in-out;
    text-decoration: none;
    /* font-size: 24px; */
  }

  .btn:hover {
    opacity: 0.7;
  }

  /* MENU */
  .ham-menu-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    visibility: hidden;
  }

  .ham-menu-wrap .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }

  .ham-menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hamburger Line */
  .ham-menu-wrap .hamburger > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hamburger Lines - All three*/
  .ham-menu-wrap .hamburger > div::before,
  .ham-menu-wrap .hamburger > div::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background: inherit;
  }

  .ham-menu-wrap .hamburger > div::after {
    top: 10px;
  }

  /* Animation */
  .ham-menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }

  /* X Create */
  .ham-menu-wrap .toggler:checked + .hamburger > div:before,
  .ham-menu-wrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }

  /* Rotate On Hover When Checked */
  .ham-menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }

  .ham-menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
  }

  .ham-menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
  }

  .ham-menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.4s ease 0.4s;
  }

  .ham-menu-wrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ham-menu-wrap .menu > div {
    background: gray;
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
    opacity: 0.5;
  }

  .ham-menu-wrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .ham-menu-wrap .menu > div > div > ul > li {
    list-style: none;
    color: white;
    padding: 1rem;
  }

  .ham-menu-wrap .menu > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
    font-size: 60px;
    font-weight: bold;
  }
  /* Responsiveness */
  @media screen and (max-width: 1034px) {
    #link1 {
      visibility: hidden !important;
    }
    #link2 {
      visibility: hidden !important;
    }
    #link3 {
      visibility: hidden !important;
    }
    #link4 {
      visibility: hidden !important;
    }
    .hamburger {
      visibility: visible !important;
    }
    .toggler {
      visibility: visible !important;
    }
  }
`;

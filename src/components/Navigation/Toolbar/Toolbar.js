import React, { Component } from "react";
import { throttle } from "underscore";
import { NavLink } from "react-router-dom";

import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const delta = 5;

class Toolbar extends Component {
  state = {
    didScroll: true,
    lastScrollTop: 0,
    navClass: "nav-down"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  hideHeader = () => {
    this.setState({
      navClass: "nav-up"
    });
  };

  showHeader = () => {
    this.setState({
      navClass: "nav-down"
    });
  };
  hasScrolled = () => {
    const st = window.scrollY;

    // Make sure they scroll more than delta
    if (Math.abs(this.state.lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > this.state.lastScrollTop && st > this.navbarRef.offsetHeight) {
      // Scroll Down
      this.hideHeader();
    } else {
      // Scroll Up
      // if(st + window.outerHeight < this.getDocHeight()) {
      //   this.showHeader();
      // }
      if (st < this.getDocHeight()) {
        this.showHeader();
      }
    }

    this.setState({
      lastScrollTop: st
    });
  };

  handleScroll = () => {
    this.setState({
      didScroll: true
    });

    throttle(this.hasScrolled(), 250);
  };

  render() {
    const classesToAdd = [classes.Toolbar, classes[this.state.navClass]];

    return (
      <header
        className={classesToAdd.join(" ")}
        ref={el => {
          this.navbarRef = el;
        }}
      >
        <NavigationItems />
        <ul>
          <li>
            <NavLink to="/contact">Let's work together</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Toolbar;

import "./navigation.scss";
import * as Scroll from "react-scroll";

let scroller = Scroll.scroller;
let animateScroll = Scroll.animateScroll;

function Navigation() {
  return (
    <nav className="header-container">
      <ul className="nav-list">
        <li
          onClick={() =>
            animateScroll.scrollToTop({
              duration: 20,
              delay: 0,
            })
          }
        >
          Home
        </li>
        <li
          onClick={() =>
            scroller.scrollTo("about", {
              duration: 20,
              delay: 0,
              smooth: true,
              offset: -100,
            })
          }
        >
          About
        </li>
        <li
          onClick={() =>
            scroller.scrollTo("projects", {
              duration: 20,
              delay: 0,
              smooth: true,
              offset: -150,
            })
          }
        >
          Projects
        </li>
        <li
          onClick={() =>
            scroller.scrollTo("contact", {
              duration: 20,
              delay: 0,
              smooth: true,
              offset: -50,
            })
          }
        >
          Contact
        </li>
        <li
          onClick={() =>
            scroller.scrollTo("myScrollToElement", {
              duration: 20,
              delay: 0,
              smooth: true,
              offset: -100,
            })
          }
        >
          Resume
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

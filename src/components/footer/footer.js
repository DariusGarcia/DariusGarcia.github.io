import "./footer.scss";
import { MdMailOutline, MdCall } from "react-icons/md";
import { IconContext } from "react-icons";
import { DiGithubBadge } from "react-icons/di";

function footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <section className="footer-section">
          <h1 id="dj-lotus-title"> darius garcia.</h1>
          <article className="social-media-links">
            <IconContext.Provider
              className="footer-github-icon"
              value={{ color: "#ff7900", size: "1.5rem" }}
            >
              <a
                href="https://github.com/DariusGarcia"
                target="_blank"
                rel="noreferrer"
              >
                <DiGithubBadge />
                <span id="span-media-icons">GitHub</span>
              </a>
            </IconContext.Provider>
          </article>
        </section>

        <section className="footer-section">
          <article>
            <h2 id="get-in-touch">Let's get in touch</h2>

            <p id="email-phone-icons">
              <span id="span-socials-icon">
                <MdMailOutline />
              </span>{" "}
              Email: Dariusgarcia888@gmail.com
            </p>
            <p id="email-phone-icons">
              <span id="span-socials-icon">
                <MdCall />
              </span>
              Phone: (562) 392-2931
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default footer;

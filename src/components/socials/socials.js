import "./socials.scss";
import { DiGithubBadge } from "react-icons/di";

function Socials() {
  return (
    <div className="socials-container">
      <section>
        <header>
          <h1>Lets get in touch!</h1>
        </header>
        <article className="socials-body-text">
          <h4>Email: Dariusgarcia888@gmail.com</h4>
          <h4>Phone (Cell): 562-392-2931</h4>
          <article>
            <h4>GitHub</h4>
            <DiGithubBadge />
          </article>
        </article>
      </section>
    </div>
  );
}

export default Socials;

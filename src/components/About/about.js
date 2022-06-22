import "./about.scss";

function About() {
  return (
    <div className="about-container-component">
      <h1 className="about-me">About Me</h1>
      <div>
        <p className="about-me-message">
          I am a senior Business Economics student at UC Irvine. I am a
          self-starter that is driven to uncover the "why" in how things work.
        </p>
        <br></br>
        <p className="about-me-message">
          More specifically, I'm interested in becoming a front-end web
          developer. I found a passion for programming by having to think
          outside the box for solving various real world problems and being able
          to let my creativity run freely. Since then, I have found a love for
          creating elegant apps to which I decided to push myself to learn other
          programming languages and technologies. I'm always trying to further
          advance my capabilities to see where my creativity leads me.
        </p>
        <br></br>
        <p className="about-me-message">
          I strive to keep learning new things to not only apply to my everyday
          life, but to <u>constantly challenge what's possible</u>. I try to
          refrain from accepting one approach of doing something, but rather
          seek comfort in embracing the <i>unknown</i> to be able to shed light
          on new solutions. I am a problem solver that wants to utilize my
          skills to help other people and to be able to make the world a better
          place for all!
        </p>
      </div>
    </div>
  );
}

export default About;

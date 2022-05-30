import "./projects.css";

function Projects() {
  return (
    <div className="projects-container-component">
      <h1 className="about-me">Projects</h1>

      <div>
        <p className="here-are-some-of-my-projects">
          Here are some of my projects
        </p>
      </div>
      <div>
        <section className="card-list">
          <article className="card">
            <header className="card-header">
              <h1>BullBear</h1>
              <p>
                BullBear is a React web app that lets users add stocks from the
                S&P500 index to their own personal watch list.
              </p>
            </header>
            <a href="https://dariusgarcia.github.io/BullBear">
              Link to BullBear
            </a>
          </article>

          <article className="card">
            <header className="card-header">
              <h1>Instapic</h1>
              <p>
                Instapic is an Android photo sharing app similar to Instagram
                but uses Back4App as its backend.
              </p>
            </header>
            <a href="https://github.com/dariusgarcia/Instapic">
              Link to Instapic
            </a>
          </article>
          <article className="card">
            <header className="card-header">
              <h1>Favorite Classes</h1>
              <p>
                React web app that let users add their favorite UCI courses to a
                list. Utilizes GraphQL and PeterPortal API.
              </p>
            </header>
            <a href="https://dariusgarcia.github.io/favorite-classes">
              Link to Favorite Classes
            </a>
          </article>

          <article className="card">
            <header className="card-header">
              <h1>Tweeter</h1>
              <p>
                Tweeter is an android app that allows a user to view his Twitter
                timeline and post a new tweet. The app utilizes Twitter REST
                API.
              </p>
            </header>
            <a href="https://github.com/dariusgarcia/tweeter">
              Link to Tweeter
            </a>
          </article>

          <article className="card">
            <header className="card-header">
              <h1>Flixter</h1>
              <p>
                Flixter is an app that allows users to browse movies from the
                [The Movie Database API]
              </p>
            </header>
            <a href="https://github.com/dariusgarcia/flixter">
              Link to Flixter
            </a>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Projects;

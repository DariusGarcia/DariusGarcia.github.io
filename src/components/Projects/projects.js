import "./projects.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import * as Scroll from "react-scroll";
import { DiGithubBadge } from "react-icons/di";
import {
  controlVariant1,
  controlVariant2,
  controlVariant3,
  controlVariant4,
  controlVariant5,
  fadeIn,
  openSpring,
  closeSpring,
} from "../../utils/utils";

// used for navigation click to scroll to element
let Element = Scroll.Element;

function Projects() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.Element name="projects">
      <div className="projects-container-component">
        <motion.h1
          className="projects-title"
          ref={ref}
          variant={fadeIn}
          animate={control}
          initial="hidden"
          transition={{ ease: "easeOut", duration: 5 }}
        >
          Projects
        </motion.h1>

        {/* individual project section */}
        <section className="card-list">
          <motion.article
            className="card"
            ref={ref}
            variants={fadeIn}
            initial="hidden"
            animate={control}
          >
            <header className="card-header">
              <h1>BullBear</h1>
              <p className="projects-body-text">
                BullBear is a React web app that lets users add stocks from the
                S&P500 index to their own personal watch list.
              </p>
            </header>
            <p className="tech-used">
              Tech: React, Javascript, Firebase Auth, REST API, HTML/CSS
            </p>
            <a
              className="github-repo-links"
              href="https://dariusgarcia.github.io/BullBear"
            >
              <DiGithubBadge className="gh-badge" /> Link to BullBear
            </a>
          </motion.article>
          <motion.article
            className="card"
            ref={ref}
            variants={controlVariant2}
            initial="hidden"
            animate={control}
          >
            <header className="card-header">
              <h1>Favorite Classes</h1>
              <p className="projects-body-text">
                React web app that let users add their favorite UCI courses to a
                list. Utilizes GraphQL and PeterPortal API.
              </p>
            </header>
            <p className="tech-used">
              Tech: React, Javascript, Firebase Firestore, GraphQL, HTML/CSS
            </p>
            <a
              className="github-repo-links"
              href="https://dariusgarcia.github.io/favorite-classes"
            >
              <DiGithubBadge className="gh-badge" /> Link to Favorite Classes
            </a>
          </motion.article>

          <motion.article
            className="card"
            ref={ref}
            variants={controlVariant3}
            initial="hidden"
            animate={control}
          >
            <header className="card-header">
              <h1>Instapic</h1>
              <p className="projects-body-text">
                Instapic is an Android photo sharing app similar to Instagram
                but uses Back4App as its backend.
              </p>
            </header>
            <p className="tech-used">
              Tech: Kotlin, Android, REST API, Back4App backend, Git
            </p>
            <a
              className="github-repo-links"
              href="https://github.com/dariusgarcia/Instapic"
            >
              <DiGithubBadge className="gh-badge" /> Link to Instapic
            </a>
          </motion.article>

          <motion.article
            className="card"
            ref={ref}
            variants={controlVariant4}
            initial="hidden"
            animate={control}
          >
            <header className="card-header">
              <h1>Tweeter</h1>
              <p className="projects-body-text">
                Tweeter is an android app that allows a user to view his Twitter
                timeline and post a new tweet. The app utilizes Twitter REST
                API.
              </p>
            </header>
            <p className="tech-used">Tech: Kotlin, Android, REST API, Git</p>
            <a
              className="github-repo-links"
              href="https://github.com/dariusgarcia/tweeter"
            >
              <DiGithubBadge className="gh-badge" /> Link to Tweeter
            </a>
          </motion.article>
          <motion.article
            className="card"
            ref={ref}
            variants={controlVariant5}
            initial="hidden"
            animate={control}
          >
            <header className="card-header">
              <h1>Flixter</h1>
              <p className="projects-body-text">
                Flixter is an app that allows users to browse movies from the
                [The Movie Database API]
              </p>
            </header>
            <p className="tech-used">Tech: Kotlin, Android, REST API, git</p>
            <a
              className="github-repo-links"
              href="https://github.com/dariusgarcia/flixter"
            >
              <DiGithubBadge className="gh-badge" /> Link to Flixter
            </a>
          </motion.article>
        </section>
      </div>
    </motion.Element>
  );
}

export default Projects;

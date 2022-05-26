import './projects.css';

function Projects() {
    return (
        <div className='projects-container-component'>
            <h1 className='about-me'>Projects</h1>

            <div>
                <p className='here-are-some-of-my-projects'>Here are some of my projects</p>
            </div>
            <div>
            <section className="card-list">
            <article className="card">
                <header className="card-header">
                    <h1>Cryptonite</h1>
                    <p>Cryptonite is an Android mobile app that will let you add different cryptos to your watchlist.
                    </p>
                </header>
                {/* <a href="https://github.com/DariusGarcia/Cryptonite" target="_blank">
                    <img src="images/cryptonite.gif" alt="Link to Cryptonite project" id="crypto-gif">
                </a> */}
            </article>


            <article className="card">
                <header className="card-header">
                    <h1>Instapic</h1>
                    <p>Instapic is an Android photo sharing app similar to Instagram but uses Back4App as its backend.
                    </p>
                </header>
                {/* <a href="https://github.com/DariusGarcia/Instapic" target="_blank" id="crypto-gif">
                    <img src={instapic} alt="Link to Cryptonite project" id="crypto-gif"></img>
                </a> */}
            </article>

            <article className="card">
                <header className="card-header">
                    <h1>Tweeter</h1>
                    <p>Tweeter is an android app that allows a user to view his Twitter timeline and post a new tweet.
                        The
                        app utilizes Twitter REST API.</p>
                </header>
                {/* <a href="https://github.com/DariusGarcia/Tweeter" target="_blank" id="crypto-gif">
                    <img src={tweeter} alt="Link to Cryptonite project" id="crypto-gif"> </img> */}
                {/* </a> */}
            </article>

            <article className="card">
                <header className="card-header">
                    <h1>Flixter</h1>
                    <p>Flixter is an app that allows users to browse movies from the [The Movie Database API]</p>
                </header>
                {/* <a href="https://github.com/DariusGarcia/Flixter" target="_blank" id="crypto-gif">
                    <img src="images/flixter.gif" alt="Link to Cryptonite project" id="crypto-gif">
                </a> */}
            </article>

            <article className="card">
                <header className="card-header">
                    <h1>Lorem Ipsum</h1>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </p>
                </header>
                {/* <a href="https://github.com/DariusGarcia/Cryptonite" target="_blank" id="crypto-gif">
                    <img src="images/cryptonite.gif" alt="Link to Cryptonite project" id="crypto-gif">
                </a> */}
            </article>


        </section>
            </div>

            
        </div>
    )
}

export default Projects;
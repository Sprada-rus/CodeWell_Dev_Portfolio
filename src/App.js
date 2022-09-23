import {Header} from "./modules/Header.js";

function App() {
  return (
        <div>
            <Header/>
            <section>
                <div className="content title-description">
                  <h1>Helping companies build better, scalable software.</h1>
                  <p>Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 compains like Apple, Google, Facebook and more.</p>
                </div>
                <div className="content logos">
                    <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/logos/Walmart.svg"  alt="Walmart"/>
                    <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/logos/JP%20Morgan.svg" alt="JPMorgan"/>
                    <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/logos/Visa.svg" alt="Visa"/>
                    <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/logos/Tinder.svg" alt="Tinder"/>
                    <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/logos/Samsung.svg" alt="Samsung"/>
                    <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/logos/Verizon.svg" alt="Verizon"/>
                </div>
                <div className="content cards">
                    <div className="col">
                        <div className="card">
                            <div className="card-content white-text">
                                <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/master/src/img/Spense.png" alt="Spense"/>
                                <p className="card-title"><a>Spense.com</a> &rarr;</p>
                                <p className="card-description">Rethinking the way writes get paid, an open-source platform designed to help writes focus more on writing,
                                and less on when and how they'll get paid. Project in collaboration with Codewell.cc</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-content white-text">
                                <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/master/src/img/YelpCamp.png" alt="Spense"/>
                                <p className="card-title"><a>YelpCamp.com</a> &rarr;</p>
                                <p className="card-description">Allowing backpack travelers to perfectli plan their trip through&nbsp;an open-source platform similar to TripAdvisor.
                                With over 1m MAU, YelpCamp has been the crowds`s favorite in 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="back-gray">
                <section >
                    <div className="content split-content">
                        <div>
                            <p className="title">A co-founder at one of the world`s&nbsp;largest communities.</p>
                            <p className="desc-text">The combined experience i habe working at the top Fortune 500 companies has allowed me to developer a skillset that helps me in not just development, but in every aspect of any business.</p>
                            <p className="desc-text">I'm proud to announce that I am now working at one of the world`s largest communities teaching young minds about how to sell yourself as a developer and open then to a whole new world of opportunities.</p>
                        </div>
                        <div>
                            <p className="desc-text">As a developer, you have everything available to you and all that`s holding you back is yourself.</p>
                            <p className="desc-text">A quote I live by perfectly illustrates what I mean.</p>
                            <p className="desc-text">"How big would you dream, if you <b>knew</b> you would`t fail?" You`ve already gone through the hardest parts beign a developer, it`s time to elevate your skills and become a leader in something you`re passionate about.</p>
                            <p className="desc-text">I`m happy to chat over coffee some time about how I can help your company.</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="split-content">
                <div className="flex-basis-50 m-flex-basis-100">
                    <p className="title">Interested in working with me?</p>
                    <p className="desc-text">I`m active on all social media platforms listed below, but you can&nbsp;also&nbsp;me an email and I will get back to you within 24-48 hours.</p>
                    <button>Get in touch</button>
                </div>
            </section>

            <div className="back-gray">
                <footer>
                    <div className="logo-str"><span>Johnathan Specter</span></div>
                    <div className="social-icons">
                        <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/Social%20Icons/Twitter.svg" alt=""/>
                        <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/Social%20Icons/LinkedIn.svg" alt=""/>
                        <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/Social%20Icons/Github.svg" alt=""/>
                    </div>
                </footer>
            </div>

        </div>
  );
}

export default App;

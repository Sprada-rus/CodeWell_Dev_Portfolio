import {Header} from "./modules/Header.js";
import walmartSvg from './img/logos/Walmart.svg';
import JPMorganSvg from './img/logos/JP Morgan.svg';
import visaSvg from './img/logos/Visa.svg';
import tinderSvg from './img/logos/Tinder.svg';
import samsungSvg from './img/logos/Samsung.svg';
import verizonSvg from './img/logos/Verizon.svg';
import spensePng from './img/Spense.png';
import yelpCampPng from './img/YelpCamp.png';
import twitterIcon from './img/Social Icons/Twitter.svg';
import inIcon from './img/Social Icons/LinkedIn.svg';
import githubIcon from './img/Social Icons/Github.svg';

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
                    <img src={walmartSvg} alt="Walmart"/>
                    <img src={JPMorganSvg} alt="Walmart"/>
                    <img src={visaSvg} alt="Walmart"/>
                    <img src={tinderSvg} alt="Walmart"/>
                    <img src={samsungSvg} alt="Walmart"/>
                    <img src={verizonSvg} alt="Walmart"/>
                </div>
                <div className="content cards">
                    <div className="col">
                        <div className="card">
                            <div className="card-content white-text">
                                <img src={spensePng} alt="Spense"/>
                                <p className="card-title"><a>Spense.com</a> &rarr;</p>
                                <p className="card-description">Rethinking the way writes get paid, an open-source platform designed to help writes focus more on writing,
                                and less on when and how they'll get paid. Project in collaboration with Codewell.cc</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-content white-text">
                                <img src={yelpCampPng} alt="Spense"/>
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
                        <img src={twitterIcon} alt=""/>
                        <img src={inIcon} alt=""/>
                        <img src={githubIcon} alt=""/>
                    </div>
                </footer>
            </div>

        </div>
  );
}

export default App;

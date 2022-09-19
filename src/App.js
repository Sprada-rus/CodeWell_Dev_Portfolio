import {Header} from "./modules/Header.js";
import walmartSvg from './img/logos/Walmart.svg';
import JPMorganSvg from './img/logos/JP Morgan.svg';
import visaSvg from './img/logos/Visa.svg';
import tinderSvg from './img/logos/Tinder.svg';
import samsungSvg from './img/logos/Samsung.svg';
import verizonSvg from './img/logos/Verizon.svg';
import spensePng from './img/Spense.png';
import yelpCampPng from './img/YelpCamp.png';

function App() {
  return (
      <div>
        <Header/>
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
      </div>
  );
}

export default App;

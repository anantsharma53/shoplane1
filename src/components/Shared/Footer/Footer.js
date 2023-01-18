import "./Footer.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return( <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} ShopLane. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

               
            </div>
        </footer>
        );
}

export default Footer;

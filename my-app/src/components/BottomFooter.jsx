import "./BottomFooter.css";
import { Row, Col } from "react-bootstrap";
import LinkedIn_Logo_2019 from "../assets/LinkedIn_Logo_2019.png";

function BottomFooter() {
  return (
    <>
      <footer>
        <Col md={"12"}>
          <Row>
            <div>
              <img
                src={LinkedIn_Logo_2019}
                className="logo"
                width={135}
                height={35}
                alt="profile"
              />
            </div>
          </Row>
          <Col md={"6"} xl={"6"}>
            <Row>
              <div>
                <ul className="grid ">
                  <li>About</li>
                  <li>Accessibility</li>
                  <li>Talent Solutions</li>
                  <li>Community Guidelines</li>
                  <li>Careers</li>
                  <li>Marketing Solutions</li>
                  <li>Privacy & Terms</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Sales Solutions</li>
                  <li>Mobile</li>
                  <li>Small Business</li>
                  <li>Safety Center</li>
                </ul>
              </div>
            </Row>
          </Col>
          <Col md={"6"} xl={"6"}>
            <Row>
              <div
                className="grid__col grid__col--12" >
                <div className="grid ">
                  <ul className="">
                    <li className="display-flex list-style-none mb4">
                      <li-icon
                        aria-hidden="true"
                        type="question-pebble-icon"
                        active="true"
                        className="global-footer__action-icon"
                        color="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
                        </svg>
                      </li-icon>

                      <span>
                        <p>Questions?</p>

                        <p className=" t-12">Visit our Help Center.</p>
                      </span>
                    </li>
                    <li className="display-flex list-style-none mb4">
                      <li-icon
                        aria-hidden="true"
                        type="gear-icon"
                        active="true"
                        className="global-footer__action-icon"
                        color="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                        </svg>
                      </li-icon>

                      <span>
                        Manage your account and privacy
                        <p className="global-footer__label t-12">
                          Go to your Settings.
                        </p>
                      </span>
                    </li>
                  </ul>

                  <div
                    className="grid__col
                grid__col--12"
                  >
                    <label className=" t-12 t-normal mb1 mt0">
                      Select Language
                    </label>

                    <select className=" t-bold">
                      <option value="ar_AE" lang="ar-ae">
                        العربية (Arabic)
                      </option>
                      <option value="cs_CZ" lang="cs-cz">
                        Čeština (Czech)
                      </option>
                      <option value="da_DK" lang="da-dk">
                        Dansk (Danish)
                      </option>
                      <option value="de_DE" lang="de-de">
                        Deutsch (German)
                      </option>
                      <option value="en_US" lang="en-us">
                        English (English)
                      </option>
                      <option value="es_ES" lang="es-es">
                        Español (Spanish)
                      </option>
                      <option value="fr_FR" lang="fr-fr">
                        Français (French)
                      </option>
                      <option value="in_ID" lang="in-id">
                        Bahasa Indonesia (Bahasa Indonesia)
                      </option>
                      <option value="it_IT" lang="it-it">
                        Italiano (Italian)
                      </option>
                      <option value="ja_JP" lang="ja-jp">
                        日本語 (Japanese)
                      </option>
                      <option value="ko_KR" lang="ko-kr">
                        한국어 (Korean)
                      </option>
                      <option value="ms_MY" lang="ms-my">
                        Bahasa Malaysia (Malay)
                      </option>
                      <option value="nl_NL" lang="nl-nl">
                        Nederlands (Dutch)
                      </option>
                      <option value="no_NO" lang="no-no">
                        Norsk (Norwegian)
                      </option>
                      <option value="pl_PL" lang="pl-pl">
                        Polski (Polish)
                      </option>
                      <option value="pt_BR" lang="pt-br">
                        Português (Portuguese)
                      </option>
                      <option value="ro_RO" lang="ro-ro">
                        Română (Romanian)
                      </option>
                      <option value="ru_RU" lang="ru-ru">
                        Русский (Russian)
                      </option>
                      <option value="sv_SE" lang="sv-se">
                        Svenska (Swedish)
                      </option>
                      <option value="th_TH" lang="th-th">
                        ภาษาไทย (Thai)
                      </option>
                      <option value="tl_PH" lang="tl-ph">
                        Tagalog (Tagalog)
                      </option>
                      <option value="tr_TR" lang="tr-tr">
                        Türkçe (Turkish)
                      </option>
                      <option value="zh_CN" lang="zh-cn">
                        简体中文 (Chinese (Simplified))
                      </option>
                      <option value="zh_TW" lang="zh-tw">
                        正體中文 (Chinese (Traditional))
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </Row>
            <p class=" text-secondary text-align-left clear-both">
              LinkedIn Corporation © 2021
            </p>
          </Col>
        </Col>
      </footer>
    </>
  );
}

export default BottomFooter;

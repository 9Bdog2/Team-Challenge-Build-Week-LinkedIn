import "./BottomFooter.css";
import { Row, Col, Container } from "react-bootstrap";
import LinkedIn_Logo_2019 from "../assets/LinkedIn_Logo_2019.png";

const links1 = [
  "About",
  "Community Guidelines",
  "Privacy & Terms",
  "Safety Center",
];

const links2 = [
  "Accessibility",
  "Careers",
  "Ad Choices",
  "Mobile",
  "Sales Solutions",
];

const links3 = [
  "Talent Solutions",
  "Marketing Solutions",
  "Advertising",
  "Small Business",
];
function BottomFooter() {
  return (
    <Container className="footer_container">
      <Row style={{ color: "black" }}>
        <Col xs={12}>
          <img
            src={LinkedIn_Logo_2019}
            className="logo"
            width={135}
            height={35}
            alt="profile"
          />
        </Col>
        <Col xs={2} className="d-flex flex-column">
          {links1.map((link) => (
            <span>{link}</span>
          ))}
        </Col>
        <Col xs={2} className="d-flex flex-column">
          {links2.map((link) => (
            <span>{link}</span>
          ))}
        </Col>
        <Col xs={2} className="d-flex flex-column">
          {links3.map((link) => (
            <span>{link}</span>
          ))}
        </Col>
        <Col xs={3} className="d-flex flex-column">
          <div className="d-flex mb-2 ">
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
            <div className="d-flex flex-column pl-1">
              <span>Questions?</span>
              <span>Visit our Help Center.</span>
            </div>
          </div>
          <div className="d-flex ">
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
            <div className="d-flex flex-column pl-1">
              <span>Manage your account and privacy</span>
              <span>Go to your Settings.</span>
            </div>
          </div>
        </Col>
        <Col xs={3} className="d-flex flex-column">
          <label className=" t-12 t-normal mb1 mt0">Select Language</label>

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
        </Col>
      </Row>
    </Container>
  );
}

export default BottomFooter;

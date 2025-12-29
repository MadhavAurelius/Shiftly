import "./App.css";
import location from "./assets/Location.png";
import photo from "./assets/phone.png";
import { useState } from "react";
import MapPopup from "./MapPopup";

function App() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <div className="container" style={{ color: "#160470ff" }}>
        <div>
          <h1 style={{ color: "#f50303ff", textAlign: "center", fontSize: 80 }}>
            Shiftly
          </h1>

          <h2 style={{ textAlign: "center", fontSize: 30 }}>
            Furniture moving within and outside Hail
          </h2>

          {/* LOCATION ICON (NO GOOGLE) */}
          <img
            src={location}
            alt="Location"
            className="location"
            style={{ cursor: "pointer" }}
            onClick={() => setShowMap(true)}
          />

          <br /><br />

          Buying <br /><br />
          Selling <br /><br />
          Moving <br /><br />
          Dismantling <br /><br />
          Assembling Furniture <br /><br />
          Within and Outside Hail <br /><br />
          Including Dismantling and Assembling <br /><br />

          <strong>📞 +966 59 277 0758</strong>

          <h2 dir="rtl" style={{ textAlign: "right" }}>
            نقل العفش داخل حايل وخارج حايل<br />
            بيع - شراء - نقل - الأثاث وفك وتركيب<br />
            داخل حايل وخارج حايل مع فك وتركيب<br /><br />
            <span dir="ltr">+966 59 277 0758</span>
          </h2>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966592770758"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/023/986/550/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png" />
          </a>

          {/* Call */}
          <a href="tel:+966592770758" className="call-float">
            <img className="call" src={photo} />
          </a>
        </div>
      </div>

      {showMap && <MapPopup close={() => setShowMap(false)} />}
    </>
  );
}

export default App;

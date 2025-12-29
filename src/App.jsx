import "./App.css";
import location from "./assets/Location.png";
import bgVideo from "./assets/video.mp4";
import photo from "./assets/phone.png";

function App() {
  return (
    <>
      <div className="container" style={{ color: "#160470ff" }}>
        <div>
          <h1 style={{ color: "#f50303ff", textAlign: "center", marginLeft: 450, fontSize:80}}>
            Shiftly
          </h1>

          <h2 style={{ color: "#0e0d01ff", textAlign: "center", marginLeft:450, fontSize:30}}>
            Furniture moving within and outside Hail
            <a
              href="https://maps.app.goo.gl/bCmCHAPZnGmvfanb9"
              target="_ blank"
              rel="noopener noreferrer"
            >
              <img className="location" src={location} alt="Location" />
            </a>

            <br /><br />
            Buying <br /><br />
            Selling <br /><br />
            Moving <br /><br />
            Dismantling <br /><br />
            Assembling Furniture <br /><br />
            Within and Outside Hail <br /><br />
            Including Dismantling and Assembling <br /><br />
            +966 59 277 0758
          </h2>

          <h2 dir="rtl" style={{ textAlign: "right", marginRight: 100 }}>
            نقل العفش داخل حايل وخارج حايل<br />
            بيع - شراء - نقل - الأثاث وفك وتركيب<br />
            داخل حايل وخارج حايل مع فك وتركيب<br /><br />
            <span dir="ltr">+966 59 277 0758</span>
          </h2>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966592770758?text=Hi%20I%20am%20contacting%20from%20your%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/550/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png"
              alt="WhatsApp"
            />
          </a>

          {/* Call */}
          <a href="tel:+966592770758" className="call-float">
            <img className="call" src={photo} alt="Call" />
          </a>

         
        </div>
      </div>
    </>
  );
}

export default App;

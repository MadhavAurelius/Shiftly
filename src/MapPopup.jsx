import Map from "./Map";

export default function MapPopup({ close }) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <button style={closeBtn} onClick={close}>✖</button>
        <Map />
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modal = {
  background: "#fff",
  padding: 10,
  borderRadius: 10,
  width: 360,
};

const closeBtn = {
  float: "right",
  border: "none",
  background: "transparent",
  fontSize: 20,
  cursor: "pointer",
};

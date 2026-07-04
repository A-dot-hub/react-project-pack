import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomcolorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomhexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomcolorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomrgbColor() {
    const r = randomcolorUtility(256);
    const g = randomcolorUtility(256);
    const b = randomcolorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomhexColor();
    else handleCreateRandomrgbColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => settypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => settypeOfColor("rgb")}>Create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomhexColor
            : handleCreateRandomrgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "29px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

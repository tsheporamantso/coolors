import { useState } from "react";
import ColorsList from "./components/ColorsList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

// console.log(new Values("#f15025").all(10));

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
      toast.success("Colors loaded successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorsList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;

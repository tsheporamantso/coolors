import { useState } from "react";
import ColorsList from "./components/ColorsList";
import Form from "./components/Form";
import Values from "values.js";

console.log(new Values("#f15025").all(10));

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  return (
    <main>
      <Form />
      <ColorsList colors={colors} />
    </main>
  );
}

export default App;

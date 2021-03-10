import React from "react";
// Import Components
import Card from "./components/Cards";

// Import image
import nikeImage from "./images/nike.jpg";
import nikeImage2 from "./images/nike2.jpg";
import nikeImage3 from "./images/nike3.jpg";

// Create Global Style
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
html, body {
  font-family: 'Poppins';
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="container">
        <Card
          title="Nike Renew Run 2."
          subtitle="Men Fashion."
          price="$430."
          image={nikeImage}
        />
        <Card
          title="Nike Air Max 90."
          subtitle="Men Fashion."
          price="$705."
          image={nikeImage2}
        />
        <Card
          title="Nike SB Ryjah Free."
          subtitle="Men Fashion."
          price="$900."
          image={nikeImage3}
        />
        
      </div>
    </div>
  );
}

export default App;

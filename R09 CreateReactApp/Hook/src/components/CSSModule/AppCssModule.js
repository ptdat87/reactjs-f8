import GlobalStyles from "./GlobalStyles";
import Heading from "./Heading/index";
import Paragraph from "./Paragraph/index";

function AppCssModule() {
  return (
    <GlobalStyles>
      <div style={{ padding: "0 32px" }}>
        <Heading />
        <Paragraph />
      </div>
      <div className="d-flex">
        <div>Item 1</div>
        <div>Item 2</div>
      </div>
    </GlobalStyles>
  );
}

export default AppCssModule;

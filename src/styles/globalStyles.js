import { injectGlobal } from "styled-components";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Raleway:300,400,500,700"]
  }
});

export default injectGlobal`
  body{
      margin: 0;
      font-family: 'Raleway', sans-serif; 
  }
`;

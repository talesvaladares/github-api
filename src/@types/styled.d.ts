import "styled-components";
import { defaultTheme } from "../styles/themes/default";

// crio um tipo com o tipo do meu tema default
// esse tipo será sempre dinamico e igual ao MEU tema
type ThemeType = typeof defaultTheme;

// declaro que o defaultTheme do styled-components tem a tipagem igual ao do MEU tema
// assim quando eu for usar o thema o typescript saberá quais atributos tem o no meu tema
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
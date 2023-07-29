import "styled-components";

import { ITheme } from "./interfaces/styled";

// расширяем интерфейс стандартной темы с помощью нашего типа.
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}

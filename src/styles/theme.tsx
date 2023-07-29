// У этой реализации есть одна небольшая проблема — редактор кода не даёт подсказок при написании свойств theme.
//  Для её решения нам нужно типизировать тему и расширить интерфейс DefaultTheme.
// В корне src создаём директорию interfaces с файлом styled.ts, где опишем каждое свойство темы.

// Не забудем дописать интерфейс ITheme нашей baseTheme, чтобы все её значения были корректны.
import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#2b2b2b",
    success: "#4caf50",
    danger: "#f44336 ",
    white: "#ffffff",

    bg: "#E5E4E8",
    font: "#19191B",
  },

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};

// Готово!
// Если что, мы можем брать этот интерфейс прямо из styled-components, если это будет необходимо.
// import { DefaultTheme } from 'styled-components'

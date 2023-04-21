/** @type {import('tailwindcss').Config} */

const { toRadixVar } = require("windy-radix-palette/vars");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        grayBase: toRadixVar("gray", 1),
        grayBgSubtle: toRadixVar("gray", 2),
        grayBg: toRadixVar("gray", 3),
        grayBgHover: toRadixVar("gray", 4),
        grayBgActive: toRadixVar("gray", 5),
        grayLine: toRadixVar("gray", 6),
        grayBorder: toRadixVar("gray", 7),
        grayBorderHover: toRadixVar("gray", 8),
        graySolid: toRadixVar("gray", 9),
        graySolidHover: toRadixVar("gray", 10),
        grayText: toRadixVar("gray", 11),
        grayTextContrast: toRadixVar("gray", 12),

        dangerBase: toRadixVar("red", 1),
        dangerBgSubtle: toRadixVar("red", 2),
        dangerBg: toRadixVar("red", 3),
        dangerBgHover: toRadixVar("red", 4),
        dangerBgActive: toRadixVar("red", 5),
        dangerLine: toRadixVar("red", 6),
        dangerBorder: toRadixVar("red", 7),
        dangerBorderHover: toRadixVar("red", 8),
        dangerSolid: toRadixVar("red", 9),
        dangerSolidHover: toRadixVar("red", 10),
        dangerText: toRadixVar("red", 11),
        dangerTextContrast: toRadixVar("red", 12),

        accentBase: toRadixVar("blue", 1),
        accentBgSubtle: toRadixVar("blue", 2),
        accentBg: toRadixVar("blue", 3),
        accentBgHover: toRadixVar("blue", 4),
        accentBgActive: toRadixVar("blue", 5),
        accentLine: toRadixVar("blue", 6),
        accentBorder: toRadixVar("blue", 7),
        accentBorderHover: toRadixVar("blue", 8),
        accentSolid: toRadixVar("blue", 9),
        accentSolidHover: toRadixVar("blue", 10),
        accentText: toRadixVar("blue", 11),
        accentTextContrast: toRadixVar("blue", 12),
      },
    },
  },
  plugins: [
    require("windy-radix-palette"),
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
  ],
};

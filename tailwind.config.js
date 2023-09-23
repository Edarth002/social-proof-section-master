/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        modblue: "hsl(228, 45%, 44%)",
        Verydarkblued: "hsl(216, 50%, 16%)",
        Verydarkbluedd: "hsl(216, 50%, 20%)",
        Verydarkblueline: "hsl(215, 32%, 27%)",
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        Verydarkblue: "hsl(233, 47%, 7%)",
        Darkdesaturatedblue: "hsl(229, 23%, 23%)",
        Softviolet: "hsl(277, 64%, 61%)",
        Whiteheadingstats: "hsl(0, 0%, 100%)",
        Brightorange: "hsl(31, 77%, 52%)",
        Darkcyan: " hsl(185, 75%, 39%)",
        Darkcyanide: " hsl(184, 70%, 22%)",
        Verydarkcyan: "hsl(179, 100%, 13%)",
        Transparentwhite: "hsla(0, 0%, 100%, 0.75)",
        Verylightgray: "hsl(0, 0%, 95%)",
        Darkgrayishblue: "hsl(227, 10%, 46%)",
        Darkgray: "hsl(0, 0%, 59%)",
        Slightlytransparentwhite: "hsla(0, 0%, 100%, 0.75)",
        Slightlytransparentwhitened: "hsla(0, 0%, 100%, 0.6)",
        Moderateviolet: "hsl(263, 55%, 52%)",
        Verydarkgrayishblue: "hsl(217, 19%, 35%)",
        Verydarkblackishblue: "hsl(219, 29%, 14%)",
        Lightgray: "hsl(0, 0%, 81%)",
        Lightgrayishblue: "hsl(210, 46%, 95%)",
        Whitish: "hsl(0, 0%, 100%)",
        whiter: "rgba(225, 225, 225, 0.5)",
        whitest: "rgba(225, 225, 225, 0.7)",
        VeryDarkMagenta: "hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayishMagenta: "hsl(300, 24%, 96%)",
      },
      maxWidth: {
        small: "250px"
      },
      fontSize: {
        required: "18px"
      },
      width: {
        lower: "72%",
        mid: "33%",
        maybe: "36%",
        justfit: "75.3%",
      },
      margin: {
        please: "18.1rem",
      }

    },
    fontFamily: {
      Opensans: ('OpenSans'),
      LexendDeca: ('LexendDeca'),
      bigshoulder: ('bigshoulder')
    },


  },
  plugins: [],
}


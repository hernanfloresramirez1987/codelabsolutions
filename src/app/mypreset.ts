//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}'
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});

// const MyPreset = definePreset(Aura, {
//     semantic: {
//       colorScheme: {
//         light: {
//           surface: {
//             0: '#FFFFFF',
//             50: '#F7F0F5', // Rosa claro
//             100: '#F0D1E0',
//             200: '#E2A3C2',
//             300: '#D175A3',
//             400: '#C04785',
//             500: '#A91A67', // Crimson principal
//             600: '#93145A',
//             700: '#7C0F4D',
//             800: '#650A41',
//             900: '#4E072F',
//             950: '#3C051F'
//           },
//           primary: {
//             50: '#E6F0FF', // Azul marino muy claro
//             100: '#B3D1FF',
//             200: '#80B2FF',
//             300: '#4D93FF',
//             400: '#1A74FF',
//             500: '#004CBB', // Azul marino principal
//             600: '#003C99',
//             700: '#002C77',
//             800: '#001A55',
//             900: '#000D33',
//             950: '#000621'
//           }
//         },
//         dark: {
//           surface: {
//             0: '#0B0F1D',
//             50: '#1A2336',
//             100: '#2A2E4F',
//             200: '#3A4067',
//             300: '#4A527F',
//             400: '#5A6497',
//             500: '#A91A67', // Crimson principal en dark mode
//             600: '#93145A',
//             700: '#7C0F4D',
//             800: '#650A41',
//             900: '#4E072F',
//             950: '#3C051F'
//           },
//           primary: {
//             50: '#E6F0FF', // Azul marino muy claro
//             100: '#B3D1FF',
//             200: '#80B2FF',
//             300: '#4D93FF',
//             400: '#1A74FF',
//             500: '#004CBB', // Azul marino vibrante
//             600: '#003C99',
//             700: '#002C77',
//             800: '#001A55',
//             900: '#000D33',
//             950: '#000621'
//           }
//         }
//       }
//     }
//   });
  
const MyPreset = definePreset(Aura, {

    
      semantic: {
        colorScheme: {
          light: {
            surface: {
              0: "#FFFFFF",
              50: "#FDF7F9", 
              100: "#F8D9E0",
              200: "#F1B1C3",
              300: "#EB88A6",
              400: "#E55F89",
              500: "#D83367", 
              600: "#B02A54",
              700: "#882043",
              800: "#64162F",
              900: "#3E0B1D",
              950: "#1F060F"
            },
            primary: {
              50: "#FFF0F2",
              100: "#FFD6DC",
              200: "#FFADBA",
              300: "#FF8597",
              400: "#FF5C74",
              500: "#E63958", 
              600: "#BF2F49",
              700: "#99253A",
              800: "#731B2B",
              900: "#4D111C",
              950: "#2B080F"
            }
          },
          dark: {
            surface: {
              0: '#0A1F33',
              50: '#11263F',
              100: '#1A2E4A',
              200: '#233650',
              300: '#2D4161',
              400: '#3F4B73',
              500: '#3365D8', // Azul principal en dark mode
              600: '#2A4FB0',
              700: '#1F3C88',
              800: '#162764',
              900: '#0B1A3E',
              950: '#060E1F'
            },
            primary: {
              50: "#FFF0F2",
              100: "#FFD6DC",
              200: "#FFADBA",
              300: "#FF8597",
              400: "#FF5C74",
              500: "#E63958", 
              600: "#BF2F49",
              700: "#99253A",
              800: "#731B2B",
              900: "#4D111C",
              950: "#2B080F"
            }
          }
        }
      }
    
  });

export default MyPreset;

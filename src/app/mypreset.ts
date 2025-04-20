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
            0: '#FFFFFF',
            50: '#F8F9FD', // Azul muy claro
            100: '#D9E2F6',
            200: '#B1C6F1',
            300: '#88A9EB',
            400: '#5F8AE5',
            500: '#3365D8', // Azul principal
            600: '#2A4FB0',
            700: '#1F3C88',
            800: '#162764',
            900: '#0B1A3E',
            950: '#060E1F'
          },
          primary: {
            50: '#FFF9DB', // Amarillo muy claro
            100: '#FFEB9F',
            200: '#FFDC63',
            300: '#FFCD27',
            400: '#FFBF00', // Amarillo fuerte
            500: '#FFB300', // Amarillo principal
            600: '#E69A00',
            700: '#CC7F00',
            800: '#B26700',
            900: '#8F4F00',
            950: '#5F2A00'
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
            50: '#FFF9DB', // Amarillo muy claro
            100: '#FFEB9F',
            200: '#FFDC63',
            300: '#FFCD27',
            400: '#FFBF00', // Amarillo fuerte
            500: '#FFB300', // Amarillo principal
            600: '#E69A00',
            700: '#CC7F00',
            800: '#B26700',
            900: '#8F4F00',
            950: '#5F2A00'
          }
        }
      }
    }
  });

export default MyPreset;

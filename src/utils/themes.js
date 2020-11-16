import { blue, text } from './colors';
import { primaryFont, defaultTypeScale } from './typography';

const defaultTheme = {
    primaryColor: blue[200],
    primaryDarkColor: blue[400],
    primaryLightColor: blue[100],
    textColor: text['normal'],
    textColorInverted: text['inverted'],    
    typeScale: defaultTypeScale,
    primaryFont,
}

export const theme = defaultTheme; 

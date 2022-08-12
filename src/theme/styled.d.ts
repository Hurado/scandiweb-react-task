import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}


const myTheme: DefaultTheme = {
  primaryColor: '#FFF',
  secondaryColor: '#8A1800',
};

export { myTheme };

export const Container = styled.div`
	position: absolute;
	left: 0%;
	right: 0%;
	top: 0%;
	bottom: 0%;

	/* --c-white */

	background: #ffffff;
`
import { example_blue_ball } from './components/example_blue_ball';
import './styles/main.scss';


document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>Examples</h1>
${example_blue_ball()}
`;
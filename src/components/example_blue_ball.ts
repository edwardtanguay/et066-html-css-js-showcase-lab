import './example_blue_ball.scss';
import { wrapAsExample } from './wrapAsExample';

export const example_blue_ball = () => {
	let html = '';
	html += `
		<div class="ball">the ball</div>	
	`;
	return wrapAsExample('example_blue_ball', html);
}
export const wrapAsExample = (idCode: string, html: string) => {
	return `
	<div class="${idCode}">
		${html}	
	</div>
	`;
};
export const wrapAsExample = (idCode: string, html: string) => {
	return `
	<div class="example ${idCode}">
		${html}	
	</div>
	`;
};
export const wrapAsExample = (idCode: string, html: string) => {
	return `
	<fieldset class="example ${idCode}">
		<legend>${idCode}</legend>
		${html}	
	</fieldset>
	`;
};
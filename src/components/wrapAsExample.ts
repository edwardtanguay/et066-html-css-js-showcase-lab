export const wrapAsExample = (idCode: string, html: string, description = '') => {
	return /* html */ `
	<fieldset class="example ${idCode}">
		<legend>${idCode}</legend>
		<div class="description">${description}</div>	
		${html}	
	</fieldset>
	`;
};
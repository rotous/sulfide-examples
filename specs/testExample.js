const s2 = require('sulfide');
s2.configure({
	jasmine: true
})

describe('Test example', () => {
	it('should be able to open example.com', async () => {
		await s2.open('https://www.example.com');
		await s2('h1').shouldExist();
	});
});

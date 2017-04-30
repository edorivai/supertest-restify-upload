const request = require('supertest');
const server = require('./server');
const path = require('path');

describe('insertImage', function () {

    it('should send an image', () => {
        return request(server)
		.put('/image')
		.attach('image', path.join(__dirname, 'pc.png'))
		.expect(200);
    });

});

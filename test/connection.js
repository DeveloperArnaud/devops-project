const { expect } = require('chai')
let connection;

//Check connection to MySQL
describe('Configuration', () => {

    before(() => {
        connection = require('../connection')
    })

    it('should connect to MySQL', (done) =>  {
        expect(connection.state).to.eql("authenticated")
        done()
    } )
})
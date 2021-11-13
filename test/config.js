const { expect } = require('chai')
const config = require('../conf/default')

describe('Configuration', () => {
    let configTest = {
        "mysql": {
            "host": "127.0.0.1",
            "user": "root",
            "password": "Gwada97195",
            "database": "company"
        }
    }
    
    it('load configuration for mySQL', (done) =>  {
        expect(config.mysql).to.be.deep.equal(configTest.mysql)
        done();
    } )
})
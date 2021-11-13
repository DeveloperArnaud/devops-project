const { expect } = require('chai')
const config = require('../conf/default')

describe('Configuration', () => {
    let configTest = {
        "mysql": {
            "host": "localhost",
            "user": "root",
            "password": "Gwada97195",
            "database": "company"
        }
    }
    
    it('load configuration for mySQL', () =>  {
        expect(config.mysql).to.be.deep.equal(configTest.mysql)
    } )
})
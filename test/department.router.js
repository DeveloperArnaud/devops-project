const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('..')
chai.use(chaiHttp);

let client;

describe('Company REST API', () => {
    before(() => {
        client = require('../connection')
    })

    after(() => {
        app.close()
        client.end()
    })
})



describe('GET /departments', () => {
    it('should get all depts', (done) => {
        chai.request(app)
            .get('/departments')
            .then((res) => {
                chai.expect(res).to.have.status(200)
                done();
            }).catch(done)
    })
})

describe('GET /departments', () => {
    const dept = { DID: 10, DNAME: 'ACCOUNTING', DLOC: 'NEW-YORK' };
    it('should get one dept', (done) => {
        chai.request(app)
            .get('/departments/'+ dept.DID)
            .then((res) => {
                console.log(res.body[0])
                chai.expect(res.body[0]).to.be.deep.equal(dept)
                done()
            }).catch(done)
    })
})
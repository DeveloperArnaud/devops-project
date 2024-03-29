const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
chai.use(chaiHttp);



describe('GET /departments', () => {
    it('should get all depts', (done) => {
        chai.request(app)
            .get('/departments')
            .then((res) => {
                chai.expect(res).to.have.status(200)
            }).catch(done)
            done()
    })
})

describe('GET /departments/:id', () => {
    const dept = { DID: 10, DNAME: 'ACCOUNTING', DLOC: 'NEW-YORK' };
    it('should get one dept', (done) => {
        chai.request(app)
            .get('/departments/'+ dept.DID)
            .then((res) => {
                chai.expect(res.body[0]).to.be.deep.equal(dept)
            }).catch(done)
            done();
    })
})
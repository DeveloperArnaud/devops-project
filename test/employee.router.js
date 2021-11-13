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



describe('GET /employees', () => {
    it('should get all employees', (done) => {
        chai.request(app)
            .get('/employees')
            .then((res) => {
                chai.expect(res).to.have.status(200)
            }).catch(done)
            done()
    })
})

describe('GET /employees', () => {

    const employee = {
        EID: 7369,
        ENAME: 'SMITH',
        JOB: 'CLERK',
        MGR: 7902,
        HIRED: "1980-12-16T23:00:00.000Z",
        COMM: null,
        SAL: 800,
        DID: 20
      };

    it('should get one emp', (done) => {
        chai.request(app)
            .get('/employees/'+ employee.EID)
            .then((res) => {
                chai.expect(res).to.have.status(200)
                console.log(res.body[0])
                chai.expect(res.body[0]).to.be.deep.equal(employee) 
            }).catch(done)
            done()
    })
})
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src');
let should = chai.should();

// # set node env to test
process.env.NODE_ENV = 'test';

// # run server locally
chai.use(chaiHttp);

/**
 *
 * @description perform a get request /all
 *
 */
describe('/GET all', () => {
  it('it should GET all cases', (done) => {
    chai
      .request(server)
      .get('/all')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');

        for (const key in res.body) {
          // # it should include these keys
          res.body.should.include.keys(key);
        }

        done();
      });
  });
});

/**
 *
 * @description perform a get request /countries
 *
 */
describe('/GET countries', () => {
  it('it should GET all cases by countries', (done) => {
    chai
      .request(server)
      .get('/countries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.above(0);

        done();
      });
  });
});

/**
 *
 * @description perform a get request /all
 *
 */
describe('/GET country', () => {
  it('it should GET cases by one country', (done) => {
    chai
      .request(server)
      .get('/china')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');

        done();
      });
  });
});

import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import User from '../database/models/users.model';
import { usersMock, token } from './mocks';

import { Response } from 'superagent';
import * as jsonwebtoken from 'jsonwebtoken';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Tests for users', () => {

  let response: Response;

  afterEach(function() { sinon.restore() });

  describe('Tests for login route', () => {
    it('User is able to login successfully', async () => {

      sinon.stub(User, "findOne").resolves(usersMock as unknown as User);
      sinon.stub(jsonwebtoken, 'sign').resolves(token);

      const response = await chai
              .request(app)
              .post('/login')
              .send({
                email: 'admin@admin.com',
                password: 'secret_admin'
              });


      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ token });

    });

    it('User does not provide email', async () => {
      const response = await chai
              .request(app)
              .post('/login')
              .send({
                password: 'secret_admin'
              });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });

    it('User does not provide password', async () => {
      const response = await chai
              .request(app)
              .post('/login')
              .send({
                email: 'admin@admin.com',
              });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });

    it('User does not provide a valid email', async () => {
      const response = await chai
              .request(app)
              .post('/login')
              .send({
                email: 'admin@test.com',
                password: 'secret_admin'
              });

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });

    it('User does not provide a valid password', async () => {
      const response = await chai
              .request(app)
              .post('/login')
              .send({
                email: 'admin@test.com',
                password: 'test'
              });

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });
  });
});

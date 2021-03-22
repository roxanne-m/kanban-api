import { expect, server, BASE_URL } from './setup';


describe('Test home routes', () => {

  it('posts users', done => {
    const data = { firstName: 'some name', lastName: 'some last name' };
    server
      .post(`${BASE_URL}/users`)
      .send(data)
      .expect(201)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.user).to.have.property('firstName', data.firstName);
        expect(res.body.user).to.have.property('lastName', data.lastName);
        done();
      });
  });


  it('get users page', done => {
    server
      .get(`${BASE_URL}/users`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        res.body.users.forEach(m => {
          expect(m).to.have.property('firstName');
          expect(m).to.have.property('lastName');
        });
        done();
      });
  });

  it('get tasks page', done => {
    server
      .get(`${BASE_URL}/tasks`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.tasks).to.be.instanceOf(Array);
        res.body.tasks.forEach(m => {
          expect(m).to.have.property('title');
          expect(m).to.have.property('type');
          expect(m).to.have.property('description');
          expect(m).to.have.property('dateDue');
          expect(m).to.have.property('assignee');

        });
        done();
      });
  });

  it('posts tasks', done => {
    const data = { title: 'fakeTitle', description: 'fakeDescription', assignee: 'fakeAssignee', type:'TO DO' };
    server
      .post(`${BASE_URL}/tasks`)
      .send(data)
      .expect(201)
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.have.property('title', data.title);
        expect(res.body.message).to.have.property('description', data.description);
        expect(res.body.message).to.have.property('assignee', data.assignee);
        expect(res.body.message).to.have.property('type', data.type);
        done();
      });
  });

});
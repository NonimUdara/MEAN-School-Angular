import { TestBed } from '@angular/core/testing';

import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  let service: ValidateService;
  let res;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateService);
  });

  it('Entering wrong email address', () => {
    res = service.validateEmail("udara");
  
    expect(res).toBe(false);
  });

  it('Entering correct email address', () => {
    res = service.validateEmail("hjdgjgajja@gmail.com");
  
    expect(res).toBe(true);
  });

  it('Invalid Resources', () => {
    res = service.validateResources({name: undefined, rname: undefined, subject: undefined, stream: undefined, author: undefined, link: undefined});
  
    expect(res).toBe(false);
  });

  it('Valid Resources', () => {
    res = service.validateResources({name: 'Kamal', rname: 'Integration', subject: 'Maths', stream: 'Maths', author: 'Kapila', link: 'www.kapila.com'});
  
    expect(res).toBe(true);
  });

  it('Valid Meeting', () => {
    res = service.validateMeeting({name: 'Surith', date: new Date(), title: 'Integration By Parts', duration: 20, link: 'www.kapila.edu.com', id: 'AJKDANKKK787', passcode: '123456'});
  
    expect(res).toBe(true);
  });

  it('Invalid Meeting', () => {
    res = service.validateMeeting({name: undefined, date: new Date(), title: 'Integration By Parts', duration: 20, link: 'www.kapila.edu.com', id: 'AJKDANKKK787', passcode: '123456'});
  
    expect(res).toBe(false);
  });

  it('Valid Teacher Register', () => {
    res = service.validateTeacherRegister({name: "Kamal", gender: 'male', phone: '0711234567', worked: 10, subject: 'Maths', nic: '701246627282', email: 'kamal@gmail.com', username: 'kamalk', password: 'this1234'});
  
    expect(res).toBe(true);
  });

  it('Invalid Teacher Register', () => {
    res = service.validateTeacherRegister({name: undefined, gender: 'male', phone: '0711234567', worked: 10, subject: 'Maths', nic: '701246627282', email: 'kamal@gmail.com', username: 'kamalk', password: 'this1234'});
  
    expect(res).toBe(false);
  });

  it('Valid Student Register', () => {
    res = service.validateStudentRegister({name: undefined, index: '12345', stream: 'Maths', phone: '0711234567', email: 'kamal@gmamil.com', nic: '701246627282', password: 'kamal@gmail'});
  
    expect(res).toBe(false);
  });

  it('Invalid Student Register', () => {
    res = service.validateStudentRegister({name: 'Kamal', index: '12345', stream: 'Maths', phone: '0711234567', email: 'kamal@gmamil.com', nic: '701246627282', password: 'kamal@gmail'});
  
    expect(res).toBe(true);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { contact } from '../models/contact-model';
import { Http, XHRBackend, RequestMethod, ResponseOptions, Response } from '@angular/http';
import { AppModule } from '../app.module';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('ContactService', () => {
  let contactDatas: contact;
  // let contactService: ContactService;
  let http: Http;

  beforeAll(() => {
    this.contactDatas = new contact();
    this.mockedDatas = {
      name: "TestName",
      surname: "TestSurname",
      email: "testEmail@email.com",
      phoneNumber: "TestPhone",
      message: "Test message"
    };

  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: XHRBackend, useClass: MockBackend },
      ContactService]
    }).compileComponents();
    // contactService = new ContactService(http);
  });

  it('should response 200', 
  inject(
    [ContactService, XHRBackend], (contactService: ContactService, mockBackend) => {

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);
        expect(connection.request.url).toBe("http://localhost:5000/api/contact/");

        connection.mockRespond(new Response(
          new ResponseOptions({ 
            status: 200
           })
        ));

      });

      contactService.sendContactDatas(this.mockedDatas).subscribe(res => {
          expect(res.status).toEqual(200);
        }, () => expect(true).toEqual(false));

    }));

  it('should be created', inject([ContactService], (service: ContactService) => {
      expect(service).toBeTruthy();
    }));

});

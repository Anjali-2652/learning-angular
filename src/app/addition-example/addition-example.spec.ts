import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionExample } from './addition-example';

describe('AdditionExample', () => {
  let component: AdditionExample;
  let fixture: ComponentFixture<AdditionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

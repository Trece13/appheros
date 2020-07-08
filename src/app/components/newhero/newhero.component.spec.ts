import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewheroComponent } from './newhero.component';

describe('NewheroComponent', () => {
  let component: NewheroComponent;
  let fixture: ComponentFixture<NewheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

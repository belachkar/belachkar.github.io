import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EComComponent } from './e-com.component';

describe('EComComponent', () => {
  let component: EComComponent;
  let fixture: ComponentFixture<EComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExpertsComponent } from './about-experts.component';

describe('AboutExpertsComponent', () => {
  let component: AboutExpertsComponent;
  let fixture: ComponentFixture<AboutExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

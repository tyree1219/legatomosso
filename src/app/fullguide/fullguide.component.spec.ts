import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullguideComponent } from './fullguide.component';

describe('FullguideComponent', () => {
  let component: FullguideComponent;
  let fixture: ComponentFixture<FullguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

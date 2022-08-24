import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSmileComponent } from './base-smile.component';

describe('BaseSmileComponent', () => {
  let component: BaseSmileComponent;
  let fixture: ComponentFixture<BaseSmileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSmileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

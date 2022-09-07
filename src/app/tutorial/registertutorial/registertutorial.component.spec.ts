import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertutorialComponent } from './registertutorial.component';

describe('RegistertutorialComponent', () => {
  let component: RegistertutorialComponent;
  let fixture: ComponentFixture<RegistertutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistertutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistertutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

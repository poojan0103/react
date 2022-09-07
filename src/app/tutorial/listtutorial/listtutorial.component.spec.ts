import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtutorialComponent } from './listtutorial.component';

describe('ListtutorialComponent', () => {
  let component: ListtutorialComponent;
  let fixture: ComponentFixture<ListtutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

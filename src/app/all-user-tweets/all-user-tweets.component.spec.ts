import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserTweetsComponent } from './all-user-tweets.component';

describe('AllUserTweetsComponent', () => {
  let component: AllUserTweetsComponent;
  let fixture: ComponentFixture<AllUserTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserTweetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

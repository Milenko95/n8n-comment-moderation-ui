import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationHistoryComponent } from './moderation-history.component';

describe('ModerationHistoryComponent', () => {
  let component: ModerationHistoryComponent;
  let fixture: ComponentFixture<ModerationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

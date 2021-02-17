import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyBoardComponent } from './key-board.component';

describe('KeyBoardComponent', () => {
  let component: KeyBoardComponent;
  let fixture: ComponentFixture<KeyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a value', () => {
    expect(component.buttonPress(5)).toBeUndefined();
  });
});

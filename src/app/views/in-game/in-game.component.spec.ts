import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InGameComponent } from './in-game.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ToastrService, IndividualConfig } from 'ngx-toastr';

const toastrService = {
  success: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {},
  error: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {},
};

describe('InGameComponent', () => {
  let component: InGameComponent;
  let fixture: ComponentFixture<InGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [InGameComponent],
      providers: [{ provide: ToastrService, useValue: toastrService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the game', () => {
    expect(component.start()).toBeUndefined();
  });

  it('should reset the game before start', () => {
    expect(component.resetGame()).toBeUndefined();
  });

  it('should start a new round', () => {
    expect(component.newRound()).toBeUndefined();
  });

  it('should display a number into display', () => {
    expect(component.displayValue(0, 5)).toBeUndefined();
  });

  it('should receive a number from the "KeyBoardComponent"', () => {
    expect(component.getKey(5)).toBeUndefined();
  });

  it('should redirect to "Game Over" screen', () => {
    expect(component.gameOver()).toBeUndefined();
  });

  it('should show a "error message" and redirect to "Home" screen ', () => {
    expect(component.abort()).toBeUndefined();
  });
});

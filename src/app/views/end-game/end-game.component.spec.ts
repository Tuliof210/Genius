import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EndGameComponent } from './end-game.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EndGameComponent', () => {
  let component: EndGameComponent;
  let fixture: ComponentFixture<EndGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [EndGameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to "Home" screen', () => {
    expect(component.playAgain()).toBeUndefined();
  });

  it('should redirect to "Ranking" screen', () => {
    expect(component.saveScore()).toBeUndefined();
  });

  it('should clear localStorage', () => {
    expect(component.clearScore()).toBeUndefined();
  });

  it('should call "clearScore" and redirect to "Home" screen', () => {
    expect(component.abort()).toBeUndefined();
  });
});

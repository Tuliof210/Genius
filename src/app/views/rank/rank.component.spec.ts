import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RankComponent } from './rank.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RankComponent', () => {
  let component: RankComponent;
  let fixture: ComponentFixture<RankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RankComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the rank list', () => {
    expect(component.getRanking()).toBeUndefined();
  });

  it('should normalize "Rank" object', () => {
    expect(component.normalizeData()).toBeUndefined();
  });

  it('should go back to "Home" screen', () => {
    expect(component.goBackHome()).toBeUndefined();
  });
});

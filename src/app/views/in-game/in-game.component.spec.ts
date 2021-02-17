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
});

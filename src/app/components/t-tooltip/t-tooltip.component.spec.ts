import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTooltipComponent } from './t-tooltip.component';

describe('TTooltipComponent', () => {
  let component: TTooltipComponent;
  let fixture: ComponentFixture<TTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

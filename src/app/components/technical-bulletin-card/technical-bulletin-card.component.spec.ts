import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBulletinCardComponent } from './technical-bulletin-card.component';

describe('TechnicalBulletinCardComponent', () => {
  let component: TechnicalBulletinCardComponent;
  let fixture: ComponentFixture<TechnicalBulletinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalBulletinCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalBulletinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosMensualesPage } from './gastos-mensuales.page';

describe('GastosMensualesPage', () => {
  let component: GastosMensualesPage;
  let fixture: ComponentFixture<GastosMensualesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GastosMensualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

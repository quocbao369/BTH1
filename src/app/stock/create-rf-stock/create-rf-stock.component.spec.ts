import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRfStockComponent } from './create-rf-stock.component';

describe('CreateRfStockComponent', () => {
  let component: CreateRfStockComponent;
  let fixture: ComponentFixture<CreateRfStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRfStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

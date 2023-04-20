import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInfo1Component } from './products-info1.component';

describe('ProductsInfo1Component', () => {
  let component: ProductsInfo1Component;
  let fixture: ComponentFixture<ProductsInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInfo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

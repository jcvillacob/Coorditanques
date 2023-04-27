import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercitoComponent } from './footercito.component';

describe('FootercitoComponent', () => {
  let component: FootercitoComponent;
  let fixture: ComponentFixture<FootercitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootercitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

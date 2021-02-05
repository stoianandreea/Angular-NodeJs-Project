import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryDetailsComponent } from './jewellery-details.component';

describe('JewelleryDetailsComponent', () => {
  let component: JewelleryDetailsComponent;
  let fixture: ComponentFixture<JewelleryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelleryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

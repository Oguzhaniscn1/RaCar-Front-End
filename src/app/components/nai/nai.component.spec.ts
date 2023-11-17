import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaiComponent } from './nai.component';

describe('NaiComponent', () => {
  let component: NaiComponent;
  let fixture: ComponentFixture<NaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

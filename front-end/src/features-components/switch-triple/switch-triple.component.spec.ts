import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTripleComponent } from './switch-triple.component';

describe('SwitchTripleComponent', () => {
  let component: SwitchTripleComponent;
  let fixture: ComponentFixture<SwitchTripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchTripleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

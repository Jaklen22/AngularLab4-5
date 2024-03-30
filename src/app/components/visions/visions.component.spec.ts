import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionsComponent } from './visions.component';

describe('VisionsComponent', () => {
  let component: VisionsComponent;
  let fixture: ComponentFixture<VisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

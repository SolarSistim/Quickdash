import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickdashComponent } from './quickdash.component';

describe('QuickdashComponent', () => {
  let component: QuickdashComponent;
  let fixture: ComponentFixture<QuickdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickdashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

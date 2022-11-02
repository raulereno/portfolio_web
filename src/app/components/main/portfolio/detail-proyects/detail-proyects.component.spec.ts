import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProyectsComponent } from './detail-proyects.component';

describe('DetailProyectsComponent', () => {
  let component: DetailProyectsComponent;
  let fixture: ComponentFixture<DetailProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProyectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

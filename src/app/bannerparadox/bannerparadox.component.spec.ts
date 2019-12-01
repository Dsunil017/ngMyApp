import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerparadoxComponent } from './bannerparadox.component';

describe('BannerparadoxComponent', () => {
  let component: BannerparadoxComponent;
  let fixture: ComponentFixture<BannerparadoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerparadoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerparadoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

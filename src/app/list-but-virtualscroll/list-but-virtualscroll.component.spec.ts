import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButVirtualscrollComponent } from './list-but-virtualscroll.component';
import { MatCardModule, MatDividerModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { By } from '@angular/platform-browser';

describe('ListButVirtualscrollComponent', () => {
  let component: ListButVirtualscrollComponent;
  let fixture: ComponentFixture<ListButVirtualscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [MatCardModule,
            MatDividerModule,
            MatSlideToggleModule,
            MatSliderModule,
            ScrollingModule],
      declarations: [ ListButVirtualscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButVirtualscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('virtual scroll should render', () => {
    const stuff = fixture.debugElement.queryAll(By.css('.user-card'));
    console.log(stuff);
  });
});

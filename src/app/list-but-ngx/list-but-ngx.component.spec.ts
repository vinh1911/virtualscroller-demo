import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButNgxComponent } from './list-but-ngx.component';
import { MatCardModule, MatDividerModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { By } from '@angular/platform-browser';

fdescribe('ListButNgxComponent', () => {
    let component: ListButNgxComponent;
    let fixture: ComponentFixture<ListButNgxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule,
                MatDividerModule,
                MatSlideToggleModule,
                MatSliderModule,
                ScrollingModule,
                VirtualScrollerModule],
            declarations: [ListButNgxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListButNgxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('ngx virtual scroll should render', () => {
        const stuff = fixture.debugElement.queryAll(By.css('.user-card'));
        console.log(stuff);
      });
});

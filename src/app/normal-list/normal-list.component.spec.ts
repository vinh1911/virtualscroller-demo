import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalListComponent } from './normal-list.component';
import { MatCardModule, MatDividerModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('NormalListComponent', () => {
    let component: NormalListComponent;
    let fixture: ComponentFixture<NormalListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule,
                        MatDividerModule,
                        MatSlideToggleModule,
                        MatSliderModule,
                        ScrollingModule],
            declarations: [NormalListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NormalListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

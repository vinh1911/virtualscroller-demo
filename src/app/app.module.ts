import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NormalListComponent } from './normal-list/normal-list.component';
import { ListButVirtualscrollComponent } from './list-but-virtualscroll/list-but-virtualscroll.component';
import { MatCardModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatSliderModule, MatButtonModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AnimationComponent } from './animation/animation.component';
import { ListButNgxComponent } from './list-but-ngx/list-but-ngx.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NormalListComponent,
        ListButVirtualscrollComponent,
        AnimationComponent,
        ListButNgxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatSliderModule,
        ScrollingModule,
        MatButtonModule,
        VirtualScrollerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

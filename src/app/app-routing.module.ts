import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalListComponent } from './normal-list/normal-list.component';
import { ListButVirtualscrollComponent } from './list-but-virtualscroll/list-but-virtualscroll.component';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';
import { ListButNgxComponent } from './list-but-ngx/list-but-ngx.component';


const routes: Routes = [
    {
        path: 'list',
        component: NormalListComponent
    },
    {
        path: 'list-but-virtualscroll',
        component: ListButVirtualscrollComponent
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'animation',
        component: AnimationComponent,
    },
    {
        path: 'list-but-ngx',
        component: ListButNgxComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

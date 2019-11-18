import { Component, OnInit } from '@angular/core';
import { users } from 'src/assets/mock';

@Component({
    selector: 'app-normal-list',
    templateUrl: './normal-list.component.html',
    styleUrls: ['./normal-list.component.scss']
})
export class NormalListComponent implements OnInit {
    users: { name: any; image: any; text: any; }[];
    fontSize = 14;
    compactMode = false;
    constructor() { }

    ngOnInit() {
        this.users = users;
        console.log(users);
    }

}

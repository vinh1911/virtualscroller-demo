import { Component, OnInit } from '@angular/core';
import { users } from 'src/assets/mock';

@Component({
    selector: 'app-list-but-virtualscroll',
    templateUrl: './list-but-virtualscroll.component.html',
    styleUrls: ['./list-but-virtualscroll.component.scss']
})
export class ListButVirtualscrollComponent implements OnInit {
    users: { name: any; image: any; text: any; }[];
    fontSize = 14;
    compactMode = false;
    constructor() { }

    ngOnInit() {
        this.users = users;
        console.log(users);
    }

}

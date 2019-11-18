import { Component, OnInit } from '@angular/core';
import { users } from 'src/assets/mock';

@Component({
    selector: 'app-list-but-ngx',
    templateUrl: './list-but-ngx.component.html',
    styleUrls: ['./list-but-ngx.component.scss']
})
export class ListButNgxComponent implements OnInit {
    users: { name: any; image: any; text: any; }[];
    fontSize = 14;
    compactMode = false;
    constructor() { }

    ngOnInit() {
        this.users = users;
        console.log(users);
    }

}

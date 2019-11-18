import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.scss'],
    animations: [
        trigger('photoState', [
            state('move', style({
                transform: 'translateX(+100%)',
            })),
            state('enlarge', style({
                transform: 'scale(1.5)',
            })),
            state('spin', style({
                transform: 'rotateY(180deg) rotateZ(90deg)',
            })),
            transition('* => *', animate('500ms ease')),
        ])
    ]
})
export class AnimationComponent implements OnInit {
    photoUrl = 'https://i.kym-cdn.com/photos/images/original/000/581/296/c09.jpg';
    position: string;
    constructor() { }

    ngOnInit() {
    }

    changePosition(newPosistion: string) {
        this.position = newPosistion;
    }
}

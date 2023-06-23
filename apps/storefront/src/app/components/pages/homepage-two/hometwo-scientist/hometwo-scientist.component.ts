import { Component } from '@angular/core';

@Component({
    selector: 'app-hometwo-scientist',
    templateUrl: './hometwo-scientist.component.html',
    styleUrls: ['./hometwo-scientist.component.scss']
})
export class HometwoScientistComponent {

    singleScientistItem1 = [
        {
            img: "assets/img/scientist/img9.jpg"
        }
    ]
    singleScientistItem2 = [
        {
            img: "assets/img/scientist/img10.jpg"
        }
    ]
    singleScientistItem3 = [
        {
            img: "assets/img/scientist/img11.jpg"
        }
    ]
    scientistSectionTitle = [
        {
            subTitle: 'Our Team',
            title: 'Meet Our Data Scientist Preparing For Your Business Success',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'team',
            linkText: 'View Our Team',
            linkIcon: 'flaticon-view'
        }
    ]

}

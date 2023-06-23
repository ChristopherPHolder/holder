import { Component } from '@angular/core';

@Component({
    selector: 'app-homethree-bootcamps',
    templateUrl: './homethree-bootcamps.component.html',
    styleUrls: ['./homethree-bootcamps.component.scss']
})
export class HomethreeBootcampsComponent {

    bootcampsContent = [
        {
            title: 'Check Full Schedule for In-person Data Science Bootcamps',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Check Out All Bootcamps',
            defaultBtnLink: 'events'
        }
    ]

}

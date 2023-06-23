import { Component } from '@angular/core';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent {

    bannerContent = [
        {
            title: 'Data Analytics Consulting Services',
            paragraphText: 'World leading reliable research & AI based Data Analytics solutions for Big Data companies and consumer business products. Drive your success without stress!',
            defaultBtnIcon: 'flaticon-structure',
            defaultBtnText: 'About Us',
            defaultBtnLink: 'about-us',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Video',
            videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
    ]

}

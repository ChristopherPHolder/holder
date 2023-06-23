import { Component } from '@angular/core';

@Component({
    selector: 'app-homeone-services',
    templateUrl: './homeone-services.component.html',
    styleUrls: ['./homeone-services.component.scss']
})
export class HomeoneServicesComponent {

    sectionTitle = [
        {
            subTitle: 'Our Services',
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleServicesBox = [
        {
            icon: 'assets/img/services/icon1.png',
            title: 'Data Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'AI & ML Development',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Data Science',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon4.png',
            title: 'Predictive Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon5.png',
            title: 'Software Development',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon6.png',
            title: 'Elastic Solutions',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        }
    ]
    loadMoreBtn = [
        {
            link: 'services',
            linkText: 'Load More',
            linkIcon: 'flaticon-refresh'
        }
    ]

}



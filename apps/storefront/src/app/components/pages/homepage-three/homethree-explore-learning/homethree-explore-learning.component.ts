import { Component } from '@angular/core';

@Component({
    selector: 'app-homethree-explore-learning',
    templateUrl: './homethree-explore-learning.component.html',
    styleUrls: ['./homethree-explore-learning.component.scss']
})
export class HomethreeExploreLearningComponent {

    exploreLearningContent = [
        {
            title: 'Build Your Data Science Analytics Skills Online',
            paragraphText: 'Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.',
            linkText: 'Explore Learing',
            link: 'courses'
        }
    ]
    exploreLearningVideo = [
        {
            img: 'assets/img/explore-learning.jpg',
            icon: 'flaticon-google-play',
            videoLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
    ]

}

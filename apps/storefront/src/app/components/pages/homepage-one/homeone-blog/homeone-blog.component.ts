import { Component } from '@angular/core';

@Component({
    selector: 'app-homeone-blog',
    templateUrl: './homeone-blog.component.html',
    styleUrls: ['./homeone-blog.component.scss']
})
export class HomeoneBlogComponent {



    sectionTitle = [
        {
            subTitle: "Our Blog",
            title: 'Latest Valuable Insights',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleBlogPost = [
        {
            postImg: 'assets/img/blog/img1.jpg',
            postTitle: 'Six Ways to Make Smarter Decisions',
            postLink: 'blog-details',
            postDate: 'April 30, 2023',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img2.jpg',
            postTitle: 'The Challenges to Tackle Before You Start With AI',
            postLink: 'blog-details',
            postDate: 'April 28, 2023',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img3.jpg',
            postTitle: 'Why Organisations Want an Analytics Platform',
            postLink: 'blog-details',
            postDate: 'April 27, 2023',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        }
    ]

}

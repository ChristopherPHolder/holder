import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {



    pageTitleArea = [
        {
            title: 'Gallery'
        }
    ]
    galleryImages = [
        {
            img: 'assets/img/gallery/img1.jpg'
        },
        {
            img: 'assets/img/gallery/img2.jpg'
        },
        {
            img: 'assets/img/gallery/img3.jpg'
        },
        {
            img: 'assets/img/gallery/img4.jpg'
        },
        {
            img: 'assets/img/gallery/img5.jpg'
        },
        {
            img: 'assets/img/gallery/img6.jpg'
        },
        {
            img: 'assets/img/gallery/img7.jpg'
        },
        {
            img: 'assets/img/gallery/img8.jpg'
        },
        {
            img: 'assets/img/gallery/img9.jpg'
        }
    ]

}

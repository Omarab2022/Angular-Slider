import { Component } from '@angular/core';


interface item {
  imageSrc : string ;
  imageAlt : string ;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : item[] = [
    {
      imageSrc: '../assets/1.jpeg',
      imageAlt: '1'
    },
    {
      imageSrc: '../assets/2.webp',
      imageAlt: '2'
    },  {
      imageSrc: '../assets/3.webp',
      imageAlt: '3'
    },  {
      imageSrc: '../assets/4.png',
      imageAlt: '4'
    },  {
      imageSrc: '../assets/5.jpeg',
      imageAlt: '5'
    },  {
      imageSrc: '../assets/6.jpg',
      imageAlt: '6'
    },  {
      imageSrc: '../assets/7.jpg',
      imageAlt: '7'
    },  {
      imageSrc: '../assets/8.jpg',
      imageAlt: '8'
    },  {
      imageSrc: '../assets/9.jpg',
      imageAlt: '9'
    },  {
      imageSrc: '../assets/10.jpg',
      imageAlt: '10'
    },  {
      imageSrc: '../assets/2.webp',
      imageAlt: '11'
    },  {
      imageSrc: '../assets/10.jpg',
      imageAlt: '12'
    },  {
      imageSrc: '../assets/4.png',
      imageAlt: '13'
    },  {
      imageSrc: '../assets/7.jpg',
      imageAlt: '14'
    },  {
      imageSrc: '../assets/2.webp',
      imageAlt: '15'
    },  {
      imageSrc: '../assets/8.jpg',
      imageAlt: '16'
    },  {
      imageSrc: '../assets/9.jpg',
      imageAlt: '17'
    },  {
      imageSrc: '../assets/3.webp',
      imageAlt: '18'
    },  {
      imageSrc: '../assets/1.jpeg',
      imageAlt: '19'
    },  {
      imageSrc: '../assets/7.jpg',
      imageAlt: '20'
    },  {
      imageSrc: '../assets/6.jpg',
      imageAlt: '21'
    },
    {
      imageSrc: '../assets/9.jpg',
      imageAlt: '22'
    },
    {
      imageSrc: '../assets/2.webp',
      imageAlt: '23'
    },
    
  ]

}

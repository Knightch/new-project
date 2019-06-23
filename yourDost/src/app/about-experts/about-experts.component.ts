import { Component, OnInit } from '@angular/core';
import { Expert } from './experts-model';

@Component({
  selector: 'app-about-experts',
  templateUrl: './about-experts.component.html',
  styleUrls: ['./about-experts.component.css']
})
export class AboutExpertsComponent implements OnInit {
  experts: Expert[] = [new Expert('Nandani Kumari', 'Counselling Psychologist', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2018%2F01%2Fstephanie-schriock-motto.jpg&w=800&c=sc&poi=face&q=85', 'sun 10:00am to 6:30 pm', 'She has experience in the field and his acquaintance with all kinds of cases makes him a well-versed counsellor. He is currently working with a reputed hospital as Research analyst, helping out for the betterment of the society.If you ask for what my experience is regarding which all hospitals I have worked. '),
    new Expert('Aman Pandey', 'Counselling Psychologist', 'http://flawlessfaces.co.za/wp-content/uploads/2015/08/Mans-face.jpg', 'mon 10:00am to 6:30 pm', 'He has experience in the field and his acquaintance with all kinds of cases makes him a well-versed counsellor. He is currently working with a reputed hospital as Research analyst, helping out for the betterment of the society.If you ask for what my experience is regarding which all hospitals I have worked'),
    new Expert('Alka Jaiswal ', 'Counselling Psychologist', 'https://cdn.vox-cdn.com/thumbor/FpLUi9PYgscS7gRb9TvdccpnONg=/0x0:4542x2873/920x613/filters:focal(2227x587:2953x1313):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63847252/1136727876.jpg.7.jpg', 'mon 10:00am to 6:30 pm', 'She has experience in the field and his acquaintance with all kinds of cases makes him a well-versed counsellor. He is currently working with a reputed hospital as Research analyst, helping out for the betterment of the society.If you ask for what my experience is regarding which all hospitals I have worked')];

  constructor() { }

  ngOnInit() {
  }

}

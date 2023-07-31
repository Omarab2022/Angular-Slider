import { animate, style, transition, trigger ,AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface item {
  imageSrc : string ;
  imageAlt : string ;
}


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})

export class GalleryComponent implements OnInit{



  @Input() galData : item[] = [];
  @Input() showCount = false ;
  previwimage =false ;
  showMask = false;
  currentlightboximg : item = this.galData[0];
  currentindex = 0 ;
  controls = true;
  totalCountimg = 0 ;


  constructor(){

  }

  ngOnInit(): void {
    
  }

//show imgae zoom 
Preview(index: number): void {
  this.showMask = true;
  this.previwimage = true; // Mettez à jour previwimage à true pour afficher la lightbox.
  this.currentindex = index;
  this.currentlightboximg = this.galData[index];
}


   onAnimationEnd(event: AnimationEvent){

      if (event.toState === 'void') {
        this.showMask = false;
      }

    }

    close(){
      this.previwimage=false;
      this.showMask=false;
    }

    
    next(): void {
      this.currentindex = this.currentindex + 1;
      if(this.currentindex > this.galData.length - 1) {
        this.currentindex = 0;
      }
      this.currentlightboximg = this.galData[this.currentindex];
    }
  
    prev(): void {
      this.currentindex = this.currentindex - 1;
      if(this.currentindex < 0) {
        this.currentindex = this.galData.length - 1;
      }
      this.currentlightboximg = this.galData[this.currentindex];
    }
  }



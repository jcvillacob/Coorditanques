import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Image {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    navSpeed: 300,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };

  images: Image[] = [];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      { src: 'data:image/jpeg;base64,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', alt: 'Pintuco', title: 'Pintuco' },
      { src: 'https://www.messer-co.com/wp-content/uploads/2021/12/logo-Messer-1.png', alt: 'Messer', title: 'Messer' },
      { src: 'https://brandemia.org/contenido/subidas/2014/03/nuevo_logo_terpel.jpg', alt: 'Terpel', title: 'Terpel' },
      { src: 'data:image/jpeg;base64,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', alt: 'Andercol', title: 'Andercol' },
      { src: 'data:image/png;base64,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', alt: 'Global Latices', title: 'Global Latices' },
      { src: 'https://static.wixstatic.com/media/71025e_0234f225f90d4b08b992f07547cd9717~mv2.jpg', alt: 'Quimicos del Cauca', title: 'Quimicos del Cauca' },
    ];
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  images = [
    { url: 'public/tigrisorul.jpg', title: 'Tigrișorul Pietrek', description: 'Spectacolul „Tigrişorul Pietrek”, după H. Januszewska este o adaptare de Maria Baciu.  Regia artistică Valentin Dobrescu, scenografia este semnată de Mihai Pastramagiu, muzica îi aparţine lui Constantin Panaite.  Distribuţia:  Aurica Dobrescu  Mihaela Ştempel  Ibica Leonte  Renata Voloșcu  Florin Iftode  Marius Rusu  Pavel Petrași  Adelina Cojocariu.  Recomandat copiilor cu vârsta cuprinsa între 3 şi 10 ani' },
    { url: 'public/chit.jpg', title: 'Aventurile lui Chiț', description: 'Descrierea spectacolului 2' },
    { url: 'public/frumoasa.jpg', title: 'Frumoasa și Bestia', description: 'Descrierea spectacolului 3' },
    { url: 'public/Pinocchio.jpg', title: 'Pinocchio', description: 'Descrierea spectacolului 4' },
    { url: 'public/povestiridebuzunar.jpg', title: 'Povestiri de buzunar', description: 'Descrierea spectacolului 5' },
    { url: 'public/mcm.jpg', title: 'Muc cel mic', description: 'Descrierea spectacolului 6' },
    { url: 'public/ratusca.jpg', title: 'Spectacol 7', description: 'Descrierea spectacolului 7' },
    { url: 'public/fram.jpg', title: 'Spectacol 8', description: 'Descrierea spectacolului 8' },
    { url: 'public/luceafarul.jpg', title: 'Spectacol 8', description: 'Descrierea spectacolului 8' }

 
  ];

  currentPage: number = 1;
  imagesPerPage: number = 5;

  get pagedImages() {
    const startIndex = (this.currentPage - 1) * this.imagesPerPage;
    return this.images.slice(startIndex, startIndex + this.imagesPerPage);
  }

  nextPage() {
    if (this.currentPage * this.imagesPerPage < this.images.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  selectedImage: number | null = null;

  openModal(index: number) {
    const actualIndex = (this.currentPage - 1) * this.imagesPerPage + index;
    this.selectedImage = actualIndex;
  }

  closeModal() {
    this.selectedImage = null;
  }
}

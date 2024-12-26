import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  images: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/shows').subscribe(
      (data) => {
        this.images = data.map(show => ({
          ...show,
          url: `http://localhost:3000/${show.image}`, 
        }));
      },
      (error) => {
        console.error('Error fetching shows:', error);
      }
    );
  }


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

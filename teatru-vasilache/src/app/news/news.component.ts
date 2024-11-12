import { Component } from '@angular/core';

interface News {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsList: News[] = [
    {
      title: 'Spectacol Nou pentru Copii',
      description: '„Spectacolul „Micul Prinţ” este călătoria fiecăruia prin „univers”, în căutarea unor suflete, a unor prieteni care simt şi gândesc la fel ca noi. O călătorie în trecut pentru regăsirea copilului din noi şi pentru şansa de a ne aminti că „toţi adulţii au fost şi ei cândva copii”, dar au uitat asta, aşa că acum se comportă ciudat. Iar pentru copii este foarte obositor să le tot explice adulţilor cum funcţionează viaţa. „Micul Prinţ” este un spectacol de animaţie fără păpuşi, care se adresează copiilor peste 6 ani, dar şi tinerilor (nu-i exclude pe părinţii acestora).” Sorina Băleanu – regizor artistic.',
      imageUrl: 'public/micul-print.jpg',
      link: 'https://www.facebook.com/Teatrul.Vasilache.Botosani/posts/pfbid02JHa21WzjoAjSokRbWL9yJuvkmuaTWFzYgYPkZjfnEDargBaroUc6uCP7XJjNEfirl?locale=ro_RO'
    },
    {
      title: 'Gala Teatrului "Vasilache"',
      description: 'Dragilor, Duminică 29 septembrie 2024, la Teatrul pentru Copii şi „Tineret „Vasilache” s-a desfăşurat „Gala Teatrului „Vasilache” -  Proiect cultural finanţat de Ministerul Culturii în parteneriat cu Teatrul „Mihai Eminescu” Botoșani și Centrul Naţional de Informare şi Promovare Turistică Botoşani.',
      imageUrl: 'public/gala2.jpg',
      link: 'https://www.facebook.com/profile.php?id=61566327158175&locale=ro_RO'
    },
    {
      title: 'Mioriţa',
      description: 'Dragilor, astăzi, 12 noiembrie 2024, de la orele 11:00 şi 14:00,  trupa Teatrului Vasilache va prezenta spectacolul  „Mioriţa” în sala de spectacole a Centrului Cultural „Grigore Vasiliu Birlic” din Fălticeni, în cadrul Programului „Educaţie prin teatru”! Vă aşteptăm!!',
      imageUrl: 'public/miorita.jpg',
      link: 'https://www.facebook.com/Teatrul.Vasilache.Botosani/posts/pfbid02vxYewurUZb2iYjEDo4TVXSExiAqLGNHtbbhBPF8akJ9LnfJGNXxKEWq1Gwwf4dkVl?locale=ro_RO'
    }
  ];

  

}

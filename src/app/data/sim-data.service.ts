import { InMemoryDbService } from 'angular-in-memory-web-api';
export class SimDataService implements InMemoryDbService {
  createDb() {
    const gocs = [
      { id: 1,  name: 'Magnus Carlsen', rating: 2822, image: '/assets/goc-pics/1.jpg' },
      { id: 2, name: 'Vladimir Kramnik', rating: 2812, image: '/assets/goc-pics/2.jpg' },
      { id: 3, name: 'Wesley So', rating: 2810, image: '/assets/goc-pics/3.jpg' },
      { id: 4, name: 'Levon Aronian', rating: 2809, image: '/assets/goc-pics/4.jpg' },
      { id: 5, name: 'Fabiano Caruana', rating: 2807, image: '/assets/goc-pics/5jpg' },
      { id: 6, name: 'Shakhriyar Mamedyarov', rating: 2800, image: '/assets/goc-pics/6.jpg' },
      { id: 7, name: 'Hikaru Nakamura', rating: 2792, image: '/assets/goc-pics/7.jpg' },
      { id: 8, name: 'Maxime Vachier-Lagrave', rating: 2791, image: '/assets/goc-pics/8.jpg' },
      { id: 9, name: 'Vishwanathan Anand', rating: 2783, image: '/assets/goc-pics/9.jpg' },
      { id: 10, name: 'Liren Ding', rating: 2781, image: '/assets/goc-pics/10.jpg' },
      { id: 11, name: 'Anish Giri', rating: 2775, image: '/assets/goc-pics/11.jpg' }
    ];
    return {gocs};
  }
}

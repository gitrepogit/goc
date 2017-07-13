import { InMemoryDbService } from 'angular-in-memory-web-api';
export class SimDataService implements InMemoryDbService {
  createDb() {
    const gocs = [
      { id: 1,  name: 'Magnus Carlsen', rating: 2822 },
      { id: 2, name: 'Vladimir Kramnik', rating: 2812 },
      { id: 3, name: 'Wesley So', rating: 2810 },
      { id: 4, name: 'Levon Aronian', rating: 2809 },
      { id: 5, name: 'Fabiano Caruana', rating: 2807 },
      { id: 6, name: 'Shakhriyar Mamedyarov', rating: 2800 },
      { id: 7, name: 'Hikaru Nakamura', rating: 2792 },
      { id: 8, name: 'Maxime Vachier-Lagrave', rating: 2791 },
      { id: 9, name: 'Vishwanathan Anand', rating: 2783 },
      { id: 10, name: 'Liren Ding', rating: 2781 },
      { id: 11, name: 'Anish Giri', rating: 2775 }
    ];
    return {gocs};
  }
}

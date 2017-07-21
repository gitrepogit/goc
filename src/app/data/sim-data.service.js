"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this class is used to simulate an Http API
var SimDataService = (function () {
    function SimDataService() {
    }
    SimDataService.prototype.createDb = function () {
        var gocs = [
            { id: 1, name: 'Magnus Carlsen', rating: 2822, country: 'Norway', image: '/assets/goc-pics/1.jpg' },
            { id: 2, name: 'Vladimir Kramnik', rating: 2812, country: 'Russia', image: '/assets/goc-pics/2.jpg' },
            { id: 3, name: 'Wesley So', rating: 2810, country: 'Phillippines / USA', image: '/assets/goc-pics/3.jpg' },
            { id: 4, name: 'Levon Aronian', rating: 2809, country: 'Armenia', image: '/assets/goc-pics/4.jpg' },
            { id: 5, name: 'Fabiano Caruana', rating: 2807, country: 'Italy / USA', image: '/assets/goc-pics/5.jpg' },
            { id: 6, name: 'Shakhriyar Mamedyarov', rating: 2800, country: 'Azerbaijan', image: '/assets/goc-pics/6.jpg' },
            { id: 7, name: 'Hikaru Nakamura', rating: 2792, country: 'Japan / USA', image: '/assets/goc-pics/7.jpg' },
            { id: 8, name: 'Maxime Vachier-Lagrave', rating: 2791, country: 'France', image: '/assets/goc-pics/8.jpg' },
            { id: 9, name: 'Vishwanathan Anand', rating: 2783, country: 'India', image: '/assets/goc-pics/9.jpg' },
            { id: 10, name: 'Liren Ding', rating: 2781, country: 'China', image: '/assets/goc-pics/10.jpg' },
            { id: 11, name: 'Anish Giri', rating: 2775, country: 'Russia / Netherlands', image: '/assets/goc-pics/11.jpg' }
        ];
        return { gocs: gocs };
    };
    return SimDataService;
}());
exports.SimDataService = SimDataService;
//# sourceMappingURL=sim-data.service.js.map
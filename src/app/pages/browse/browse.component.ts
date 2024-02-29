import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './browse.component.html',
})
export class BrowseComponent {
  featureGames = [
    {
      name: 'Valorant',
      rate: 4.9,
      creator: 'Riot Games',
      imageSrc: '/assets/images/valorantPoster.jpg',
      download: '3.2M',
      streaming: '3.2k',
    },
    {
      name: 'Apex Legends',
      rate: 4.4,
      creator: 'Respawn ',
      imageSrc: '/assets/images/ApexLegendsPoster.jpg',
      download: '2.8M',
      streaming: '2.2k',
    },
    {
      name: 'Valorant',
      rate: 4.7,
      creator: 'Epic Games',
      imageSrc: '/assets/images/RocketLeaguePoster.jpg',
      download: '4.2M',
      streaming: '1.9k',
    },
  ];
}

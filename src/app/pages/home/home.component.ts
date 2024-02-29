import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mostPopularGames: {
    name: string;
    imageUrl: string;
    rate: number;
    downloads: string;
    creator: string;
  }[] = [
    {
      name: 'Fortnite',
      imageUrl: 'assets/images/fortnite.jpg',
      rate: 4.5,
      downloads: '2.5M',
      creator: 'Epic Games',
    },
    {
      name: 'Valorant',
      imageUrl: 'assets/images/valorant.jpg',
      rate: 4.8,
      downloads: '2.8M',
      creator: 'Riot Games',
    },
    {
      name: 'FC 24',
      imageUrl: 'assets/images/fc24.jpg',
      rate: 4.7,
      downloads: '5M',
      creator: 'EA Sports',
    },
    {
      name: 'CS:GO',
      imageUrl: 'assets/images/csgo.jpg',
      rate: 4.4,
      downloads: '4.2M',
      creator: 'Valve Corporation',
    },
    {
      name: 'Fortnite',
      imageUrl: 'assets/images/fortnite.jpg',
      rate: 4.5,
      downloads: '2.5M',
      creator: 'Epic Games',
    },
    {
      name: 'Valorant',
      imageUrl: 'assets/images/valorant.jpg',
      rate: 4.8,
      downloads: '2.8M',
      creator: 'Riot Games',
    },
    {
      name: 'FC 24',
      imageUrl: 'assets/images/fc24.jpg',
      rate: 4.7,
      downloads: '5M',
      creator: 'EA Sports',
    },
    {
      name: 'CS:GO',
      imageUrl: 'assets/images/csgo.jpg',
      rate: 4.4,
      downloads: '4.2M',
      creator: 'Valve Corporation',
    },
  ];
}

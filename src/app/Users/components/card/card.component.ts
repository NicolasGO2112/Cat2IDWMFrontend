import { Component, Input } from '@angular/core';
import {  User } from '../../interfaces/ResponseApi_GetAllUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data!: User[];
}

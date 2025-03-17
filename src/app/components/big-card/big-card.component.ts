import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover: string = "assets/gato-programador.jpg"

  @Input()
  cardTitle: string = "A Arte de Programar: Um Gato, Java, Café e Música"

  @Input()
  cardDescription: string = "Como um gato desenvolvedor, descobri que a combinação perfeita para programar em Java é ter uma boa playlist e uma xícara de café quentinho ao lado. A música ajuda a manter o foco felino, enquanto o café mantém minhas habilidades de codificação afiadas como minhas garras. Venha descobrir como essa tríade mágica pode transformar suas sessões de programação!"
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Piano-hdhg';
  aplicarSonido(numero: number): void {
    const audio = new Audio();
      audio.src = '../assets/sounds/note' + numero + '.wav'; 
      audio.load();
      audio.play();
  }
}

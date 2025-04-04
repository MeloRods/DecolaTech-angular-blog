import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit, OnDestroy {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    // Carrega o tema salvo no localStorage ao iniciar o componente
    const savedTheme: string | null = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    // Salva a preferência do usuário
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  applyTheme() {
    // Aplica a classe dark-mode ao body
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  ngOnDestroy(): void {
    // Opcional: Remove a classe dark-mode ao destruir o componente
    document.body.classList.remove('dark-mode');
  }
}
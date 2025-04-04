import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
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


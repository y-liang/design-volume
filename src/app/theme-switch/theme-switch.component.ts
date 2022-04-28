import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.less']
})
export class ThemeSwitchComponent implements OnInit {

  constructor() { }


  modes: string[] = ['dark', 'light'];
  mode: string;

  darkMode: boolean;

  rootElem: HTMLElement = document.querySelector('body');
  darkColors: string = `
  
  --color-bg-primary: var(--color-darker);
  --color-bg-secondary: var(--color-dark);

  --color-ft-primary: var(--color-lighter);
  --color-ft-secondary: var(--color-light);

  --color-ln-primary: var(--color-green);
  --color-ln-secondary: var(--color-blue);
  --color-ln-tertiary: var(--color-yellow); 
  --color-ln-quaternary: var(--color-pink); 

  `;

  lightColors: string = `

  --color-bg-primary: var(--color-lighter);
  --color-bg-secondary: var(--color-light);

  --color-ft-primary: var(--color-darker);
  --color-ft-secondary: var(--color-dark);

  --color-ln-primary: var(--color-blue);
  --color-ln-secondary: var(--color-green);
  --color-ln-tertiary: var(--color-yellow); 
  --color-ln-quaternary: var(--color-pink); 

  `;

  ngOnInit() {
    this.darkMode = localStorage.getItem('mode') !== 'light' ? true : false;
  }

  toggleMode() {


    if (this.darkMode) {
      this.darkMode = false;
      localStorage.setItem('mode', 'light');

      this.rootElem.style.cssText = this.lightColors;
    } else {
      this.darkMode = true;
      localStorage.setItem('mode', 'dark');

      this.rootElem.style.cssText = this.darkColors;
    }

  }

}

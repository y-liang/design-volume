# Design Volume

   Display a collection of graduate school projects in disciplines 
   such as architecture, urban design, motion capture, and data visualization.    

## Demo

- https://archival.dev.yliang.net/

![design volume](/src/assets/demo.png)



## Features


- Hovering on cards

   ![hover](/src/assets/hover.gif)

   ```
   <div *ngSwitchDefault class="wrapper">
      <div *ngFor="let img of images; index as i;" class="card card-one">
         <div class="project" (click)="openDialog(i, selection.value)">
               <img src={{img.image}} alt="">
               <div class="center">
                  <div class="title">{{img.name}}</div>
               </div>
         </div>
      </div>
   </div>

   .card {
      height: 270px;
      width: 270px;

      margin: 6px;
      position: relative;

      &:hover {
         img {
            filter: blur(3px);
            transition: 0.3s ease-in-out;
         }

         .center {
            opacity: 1;
            transition: 0.3s ease-in-out;
         }
      }

      img {
         width: 100%;
         border-radius: 9px;
      }

      .center {
         opacity: 0;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         text-align: center;

         .title {
            background-color: @color-bg-primary;
            color: @color-ln-primary;
            font-size: 15px;
            ...
         }
      }
   }
   ```


- Toggle dark and light modes
   By setting the styles  of the root element to the value of either dark color or light color CSS variables, it allows a user to toggle between light and dark mode. The current mode is stored in local storage so that it persists across page reloads.

   ![lightdark](/src/assets/lightdark.gif)


   ```
   modes: string[] = ['dark', 'light'];
   mode: string | undefined;
   darkMode: boolean | undefined;
   rootElem: HTMLElement | null = document.querySelector('body');

   darkColors: string = `
      --color-bg-primary: var(--color-darker);
      --color-bg-secondary: var(--color-dark);
      ...
   `;

   lightColors: string = `
      --color-bg-primary: var(--color-lighter);
      --color-bg-secondary: var(--color-light);
      ...
   `;

   ngOnInit() {
      if (localStorage.getItem('mode') !== 'light' && this.rootElem) {
         this.rootElem.style.cssText = this.darkColors;
         this.darkMode = true;
      }
   }
   ```

- Wave movement

   ![wave](/src/assets/wave.gif)   

   ```
   .wave>use {
      animation: move-forever 12s linear infinite;

      &:nth-child(1) {
         animation-delay: -3s;
         fill: @color-ln-primary;
         opacity: 0.75;
      }

      &:nth-child(2) {
         animation-delay: -3s;
         animation-duration: 30s;
         fill: @color-ln-primary;

      }

      &:nth-child(3) {
         animation-delay: -6s;
         animation-duration: 15s;
         fill: @color-bg-primary;
      }
   }

   @keyframes move-forever {
      0% {
         transform: translate(-90px, 0%);
      }

      100% {
         transform: translate(85px, 0%);
      }
   }
   ```


## Summary
Over the years, I have developed an interest in design that spans multiple mediums - from the physical world to the digital world. As an architectural designer, I strive to reshape cityscapes in a way that is both practical and sensible. As a web designer, I aim to create virtual environments that are intuitive and helpful. I believe that design follows function and comes from an understanding of the experience.

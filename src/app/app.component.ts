import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
      `
        <header class="header"></header>
        <main class="main-content">
            <router-outlet></router-outlet>
        </main>
        <footer class="footer"></footer>
    `,

})
export class AppComponent  {

}

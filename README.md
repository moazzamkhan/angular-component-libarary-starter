
# Install ng-packagr

```
npm install ng-packagr --save-dev
```

# Generate your component and modules
```
ng generate module modules/header

ng generate component modules/header

\\ header.component.html

<h1>
  <ng-content></ng-content>
</h1>

\\ header.component.css
h1 {
  color: red;
}

\\header.module.ts 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent // <-- this!
  ]
})
export class HeaderModule { }

\\app.component.html
<app-header>Such Header</app-header>

\\app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import our module 
import { HeaderModule } from './modules/header/header.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule // import it into our @NgModule block
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// create public_api.ts in the project root
export * from './src/app/modules/header/header.module'


// create ng-package.json in the project root

{
  "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "public_api.ts"
  }
}

// package.json 
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e",
  "packagr": "ng-packagr -p ng-package.json"
},
"private": false
```

# Create library
```
npm run packagr
// creates library in dist
```

# Consume it  by including it in its @NgModule imports array 
import { HeaderModule } from 'my-package-name';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Refs
[Building an Angular 4 Component Library with the Angular CLI and ng-packagr](https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e)

# Angular component library starter pack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

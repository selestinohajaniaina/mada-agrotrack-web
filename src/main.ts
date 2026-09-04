import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerIonicons } from './app/core/icons/ionicons';

registerIonicons();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

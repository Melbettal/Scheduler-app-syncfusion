import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

registerLicense('ORg4AjUWIQA/Gnt2XFhhQlJHfVpdXGpWfFN0QHNQdV5xflVHcC0sT3RfQFhjTXxTdk1gXHxadH1dQWteWA==');

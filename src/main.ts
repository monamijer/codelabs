import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(applicationRef=>{
    const componentRef= applicationRef.components[0];
    // allows to run `ng-profiler.timeChangeDetection();`
    enableDebugTools(componentRef)
  })
	.catch(err => console.error(err));

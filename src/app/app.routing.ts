import {Routes,RouterModule} from '@angular/router';

// Importing components here

import {BooklistComponent} from './booklist/booklist.component';
import {KartlistComponent} from './kartlist/kartlist.component';


// Creating the path for the view to load for specfic path if component is attached

const routes : Routes = [
  {
    path:'',
    redirectTo:'books',
    pathMatch :'full'
  },
  {
    path:'books',
    component:BooklistComponent
  },{
    path:'kart',
    component:KartlistComponent
  }

];
export const routing  = RouterModule.forRoot(routes);

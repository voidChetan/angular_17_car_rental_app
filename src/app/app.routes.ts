import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { BookingsComponent } from './components/bookings/bookings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'booking',
        pathMatch:'full'
    },
    {
        path:"car",
        component: CarListComponent
    },
    {
        path:'booking',
        component:BookingsComponent
    }
];

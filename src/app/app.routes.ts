import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { VisionsComponent } from './components/visions/visions.component';
import { ValuesComponent } from './components/values/values.component';
import { DetialsComponent } from './components/detials/detials.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'Home'},
    { path: 'Home', component: HomeComponent },
    {path :'Login' , component :LoginComponent},
    { path: 'AboutUs', component: AboutUsComponent ,children:
    [
        {path:'',pathMatch:'full',redirectTo:'visions'},
        {path:'visions',component:VisionsComponent},
        {path:'values',component:ValuesComponent}
    ]},
    { path: 'details/:id', component: DetialsComponent },

    { path: 'Products', component: ProductComponent },
    { path: 'order', component: OrderComponent },

    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

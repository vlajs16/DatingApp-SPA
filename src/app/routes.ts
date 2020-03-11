import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    {path : '', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {path : 'members', component: MemberListComponent},
            {path : 'members/:id', component: MemberDetailComponent},
            {path : 'lists', component: ListsComponent},
            {path : 'messages', component: MessagesComponent}
        ]
    },
    {path : '**', redirectTo: '', pathMatch: 'full'} // bilo sta sta se ne mecuje sa ovim gore ide na home
];
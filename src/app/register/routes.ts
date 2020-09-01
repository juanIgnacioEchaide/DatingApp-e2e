import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MemberListComponent } from '../_members/member-list/member-list.component';
import { MessagesComponent } from '../messages/messages.component';
import { ListsComponent } from '../lists/lists.component';
import { AuthGuard } from '../_guards/auth.guard';
import { MemberDetailComponent } from '../_members/member-detail/member-detail.component';
import { MemberDetailResolver } from '../_resolvers/meber-detail.resolver';
import { MemberEditComponent } from '../_members/member-edit/member-edit.component';
import { MemberEditResolver } from '../_resolvers/meber-edit.resolver';
import { PreventUnsavedChanges } from '../_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'members', component: MemberListComponent},
        { path: 'members/:id', component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver}},
        {path: 'member/edit', component: MemberEditComponent,
                resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
        { path: 'messages', component: MessagesComponent},
        { path: 'lists', component: ListsComponent,
                resolve: {users: MemberListComponent}}
        ]
    },
   { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

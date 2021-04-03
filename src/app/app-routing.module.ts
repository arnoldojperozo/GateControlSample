import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/layout/main/main.component';
import { Page1Component } from './components/pages/page1/page1.component';
import { Page2Component } from './components/pages/page2/page2.component';
import { PrivacyPolicyComponent } from './components/layout/privacy-policy/privacy-policy.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: MainComponent },
    { path: 'door1', component: Page1Component },
    { path: 'door2', component: Page2Component },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

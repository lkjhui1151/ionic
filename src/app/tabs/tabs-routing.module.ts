import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.dashboardPageModule)
      },
      {
        path:'dashboard/cre-project',
        loadChildren: () => import('../pages/dashboard/cre-project/cre-project-routing.module').then(m => m.CreProjectPageRoutingModule)
      },

      {
        path:'report',
        loadChildren: () => import('../pages/report/report.module').then(m => m.reportPageModule)
      },
      {
        path:'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.notificationsPageModule)
      },
      {
        path:'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.profilePageModule)
      },
      
      {
        path: '',
        redirectTo: '/app/tabs/dashboard',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

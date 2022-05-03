
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router} from '@angular/router';
// import { HomePage } from './home/home.page';
import { Platform } from '@ionic/angular';

const routes: Routes = [
{ 
  path: '',
  loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
},
{
  path: 'app',
  loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule) 
},
{
  path: 'reportdetail',
  loadChildren: () => import('./pages/report/reportdetail/reportdetail.module').then( m => m.ReportdetailPageModule) 
},
{ 
  path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'register',
  loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
},
{
  path: 'forgot-password',
  loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
},
];
@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private platform:Platform,private router:Router){
    platform.ready().then(()=>{
      if(false){
        router.navigateByUrl('')
      }
      else{
        router.navigateByUrl('app')
      }
    }) 
  }
}

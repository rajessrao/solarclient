import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './Gaurd/auth.guard'

export const routes: Routes = [
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full',

    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    },
  },
  {
    path: 'layout',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'overview',

        loadChildren: './views/overview/overview.module#OverviewModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'analysis',

        loadChildren: './views/analysis/analysis.module#AnalysisModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'historictrend',

        loadChildren: './views/historictrend/historictrend.module#HistorictrendModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

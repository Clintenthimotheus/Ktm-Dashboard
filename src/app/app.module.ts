import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { AssociationsComponent } from './associations/associations.component';
import { AboutComponent } from './about/about.component';
import { ModeltypeComponent } from './modeltype/modeltype.component';
import { ReviewsktmComponent } from './reviewsktm/reviewsktm.component';
import { CardComponent } from './card/card.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TableComponent } from './table/table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MaincontentComponent,
   
    AssociationsComponent,
  
    AboutComponent,
       ModeltypeComponent,
       ReviewsktmComponent,
       CardComponent,
       AreaChartComponent,
       TableComponent,
       PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    HighchartsChartModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

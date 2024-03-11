import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupModelComponent } from './components/popup-model/popup-model.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './components/message/message.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PdfgeneratorComponent } from './components/pdfgenerator/pdfgenerator.component';
import {NgxPrintModule} from 'ngx-print';
import { PdfmakerComponent } from './components/pdfmaker/pdfmaker.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule} from '@angular/forms';
import { BlogsComponent } from './components/blogs/blogs.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    PopupModelComponent,
    MessageComponent,
    UserDetailsComponent,
    PdfgeneratorComponent,
    PdfmakerComponent,
    RegistrationFormComponent,
    BlogsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    NgxPrintModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

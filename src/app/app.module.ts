import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardModule } from 'ngx-card/ngx-card';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';
import { InterceptorService } from './services/interceptor.service';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#34b1eb",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  // "delay": 0,
  "fgsColor": "#34b1eb",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(45,46,44,0.16)",
  "pbColor": "#34b1eb",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  // "maxTime": -1,
  // "minTime": 500
};

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    CsvUploadComponent,
    ProductsComponent,
    AddProductComponent,
    PaymentCheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Import NgxUiLoaderModule with custom configuration globally
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot(), // ToastrModule added
    CardModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


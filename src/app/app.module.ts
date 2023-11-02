import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageService } from './services/local-storage.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutContactComponent } from './pages/about-contact/about-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    CreatePostComponent,
    ContactComponent,
    AboutContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

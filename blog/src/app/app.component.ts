import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { BlogServiceService } from './blog-service.service';
import { InputTextModule } from 'primeng/inputtext'
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface Subject {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, SidebarModule, InputTextModule, FormsModule, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog';
  private blogService: BlogServiceService;
  response: any;
  newMessage: string = "";
  messageAL: string[] = [];

  subjects: Subject[] | undefined;

  selectedSubject: Subject | undefined;

  public sidebarVisible: boolean = false;

  async getData() {
    this.response = await this.blogService.getData();
    console.log(this.response)
  }

  async invio() {
    this.messageAL.push(this.newMessage);
    await this.blogService.post(this.newMessage);
    this.newMessage = "";
    this.getData();
  }

  constructor(blogService: BlogServiceService) {
    this.blogService = blogService;
  }
}

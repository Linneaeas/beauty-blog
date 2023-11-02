import { Component } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Creator } from 'src/app/interfaces/creator';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.css'],
})
export class AboutContactComponent {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;
  creator: Creator = {
    firstName: '',
    lastName: '',
    bodyOne: '',
    bodyTwo: '',
    image: '',
  };
  showFormFields: boolean = false;
  constructor(
    private viewStateService: ViewStateService,
    private localStorageService: LocalStorageService
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }

  ngOnInit() {
    const storedCreatorData = this.localStorageService.get('creatorData');
    if (storedCreatorData) {
      this.creator = { ...storedCreatorData };
    }
  }
  editNameFields: boolean = false;
  onEditName() {
    this.editNameFields = true;
  }
  onSave() {
    this.editNameFields = false;
    this.localStorageService.set('creatorData', this.creator);
  }
}

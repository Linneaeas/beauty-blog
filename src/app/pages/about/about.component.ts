import { Component } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Creator } from 'src/app/interfaces/creator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
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
  /*EDIT MODE*/
  editNameFields: boolean = false;
  editBodyFields: boolean = false;
  editImage: boolean = false;

  onEditName() {
    this.editNameFields = true;
  }

  onEditBody() {
    this.editBodyFields = true;
  }
  onEditImage() {
    this.editImage = true;
  }
  handleFileInput(event: any) {
    const files: FileList = event.target.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.creator.image = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  onSave() {
    this.editNameFields = false;
    this.editBodyFields = false;
    this.editImage = false;
    this.localStorageService.set('creatorData', this.creator);
  }
}

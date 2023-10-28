import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ViewType {
  Creator = 'creator',
  User = 'user',
}

@Injectable({
  providedIn: 'root',
})
export class ViewStateService {
  private currentViewSubject = new BehaviorSubject<ViewType>(ViewType.User);
  currentView$: Observable<ViewType> = this.currentViewSubject.asObservable();

  getCurrentView(): ViewType {
    return this.currentViewSubject.value;
  }

  setCurrentView(view: ViewType) {
    this.currentViewSubject.next(view);
  }

  constructor() {}
}

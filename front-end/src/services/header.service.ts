import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _visible = signal(false);

  set visible(value: boolean) {
    this._visible.set(value);
  }

  get visible() {
    return this._visible();
  }
}

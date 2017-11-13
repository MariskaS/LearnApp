import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../../../shared/core/base-api';
import { Theme } from '../models/theme.model';


@Injectable()
export class ThemeService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  createNewTheme(theme: Theme): Observable<Theme> {
    return this.post('themes', theme);
  }

  getThemes(): Observable<Theme[]> {
    return this.get('themes');
  }
}

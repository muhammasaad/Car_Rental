import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveTabService {
  login: boolean = false;
  constructor() {}
}

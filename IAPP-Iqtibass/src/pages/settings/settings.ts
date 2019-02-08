import { SettingsService } from './../../services/settings.service';
import { Component } from "@angular/core";
import { Toggle } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {}

  onToggle(toggle: Toggle) {
    this.settingsService.setBackGround(toggle.checked);
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }
}

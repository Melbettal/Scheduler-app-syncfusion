import { Component } from '@angular/core';
import { Month, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule height="850" width="1250" [eventSettings]="eventSettings" [currentView]="setView" [selectedDate]="setDate" ></ejs-schedule>',
  // templateUrl: './app.component.html',
   standalone: false,
  styleUrls: ['./app.component.css']  // ✅ Notice the "s" at the end
})
export class AppComponent {
  title = 'my-scheduler-app';
  public setView : View = 'Month';
  public setDate : Date = new Date(2025, 0, 15);
  private dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/angular/production/api/schedule',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  })
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };

  public eventObject: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Sucbject: "Meditation Ttime",
      EventStart: new Date(2025,0,17,11,0),
      EventEnd: new Date(2025,0,17,12,0)
    }],
  }
}

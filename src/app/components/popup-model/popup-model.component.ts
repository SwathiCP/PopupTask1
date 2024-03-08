import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
  styleUrls: ['./popup-model.component.css']
})
export class PopupModelComponent {


  @Input() title: string ='';
  visible: boolean = false;


  position: string = 'center';

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
}

}

import { Component, Input} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private location: Location){}

  @Input() title: string = '';
  
  return() {
    this.location.back();
  }

}

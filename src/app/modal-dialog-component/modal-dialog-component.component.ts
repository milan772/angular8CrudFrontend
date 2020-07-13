import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog-component',
  templateUrl: './modal-dialog-component.component.html',
  styleUrls: ['./modal-dialog-component.component.css']
})
export class ModalDialogComponentComponent implements OnInit {
  @Input() modalId: string = 'modal-dialog';
  
  constructor() { }

  ngOnInit() {
  }

}

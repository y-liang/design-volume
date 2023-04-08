import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PROJECTSARCH, IMAGESARCH, PAGESARCH } from '../lib/projects';


@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.less']
})
export class ModalBoxComponent implements OnInit {
  projectsArch = PROJECTSARCH;
  imagesArch = IMAGESARCH;
  pagesArch = PAGESARCH;

  // @Input() setIndex;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { index: number; type: string; }) { }

  ngOnInit(): void {

  }

}

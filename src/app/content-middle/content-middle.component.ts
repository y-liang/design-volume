import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBoxComponent } from '../modal-box/modal-box.component';
import { PROJECTSARCH, IMAGESARCH, PAGESARCH } from '../projects';




@Component({
  selector: 'app-content-middle',
  templateUrl: './content-middle.component.html',
  styleUrls: ['./content-middle.component.less']
})
export class ContentMiddleComponent implements OnInit {

  projectsArch = PROJECTSARCH;
  imagesArch = IMAGESARCH;
  pagesArch = PAGESARCH;

  theIndex: number;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  getIndex(i) {


    this.theIndex = i;

  }

  openDialog(i) {

    const dialogRef = this.dialog.open(ModalBoxComponent, {
      data: { index: i },
    });

  }



}

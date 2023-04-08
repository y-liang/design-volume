import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBoxComponent } from '../modal-box/modal-box.component';
import { PROJECTSARCH, IMAGESARCH, PAGESARCH } from '../lib/projects';




@Component({
  selector: 'app-content-middle',
  templateUrl: './content-middle.component.html',
  styleUrls: ['./content-middle.component.less']
})
export class ContentMiddleComponent implements OnInit {

  projectsArch = PROJECTSARCH;
  imagesArch = IMAGESARCH;
  pagesArch = PAGESARCH;

  theIndex: number | undefined;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  getIndex(i: number | undefined) {


    this.theIndex = i;

  }

  openDialog(i: number | undefined, type: string | undefined) {
    const dialogRef = this.dialog.open(ModalBoxComponent, {
      data: { index: i, type: type },
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`${result}`);
    });

  }



}

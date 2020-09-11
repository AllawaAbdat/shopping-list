import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CfgProductListService } from '../cfg-services/cfg-product-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cfg-product-list-dialog',
  templateUrl: './cfg-product-list-dialog.component.html',
  styleUrls: ['./cfg-product-list-dialog.component.css']
})
export class CfgProductListDialogComponent implements OnInit {

  // Variables
  dataReceived: any = [];
  dataSended: any = [];
  products: any = [];

  // Constructeur
  constructor(
    public dialogRef: MatDialogRef<CfgProductListDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private productListsService: CfgProductListService,
    private toastr: ToastrService
  ) {
    this.dataReceived = data;
    console.log(this.dataReceived);
  }

  ngOnInit(): void {
    this.products = this.dataReceived['products'];
  }

  // Fonction permettant de mettre à jour les informations de la liste
  updateList() {
    const inputElement = document.getElementById('titleInput') as HTMLInputElement;

    if (inputElement.value.length === 0) {
      this.toastr.info('Veuillez saisir un titre', 'Info');
    } else if (inputElement.value.length > 25) {
      this.toastr.info('Veuillez saisir un titre ayant moins de 25 caractères', 'Info');
    } else {
      this.dataReceived['listTitle'] = inputElement.value;

      this.productListsService.updateUserProductList(this.dataReceived).subscribe(
        res => {
          this.dialogRef.close({ event: 'close', data: this.dataSended});
        },
        err => {
        }
      );
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.dataSended});
  }

}

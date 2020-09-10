import { CfgUserService } from './../cfg-services/cfg-user.service';
import { CfgProductListService } from '../cfg-services/cfg-product-list.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CfgProductListDialogComponent } from '../cfg-product-list-dialog/cfg-product-list-dialog.component';

@Component({
  selector: 'app-cfg-show-lists',
  templateUrl: './cfg-show-lists.component.html',
  styleUrls: ['./cfg-show-lists.component.css']
})
export class CfgShowListsComponent implements OnInit {

  // Variables
  title = 'Consulter mes listes';
  imgPath = '../../assets/img/checkList.png';
  userId = '';
  userShoppingLists: any = [];

  // Constructeur
  constructor(
    private productListsService: CfgProductListService,
    private userService: CfgUserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userId = res['user']._id;
        this.getProductLists(this.userId);
      },
      err => {
      }
    );
  }

  // Fonction permettant de supprimer la liste de la bdd
  deleteList(_id) {
    this.productListsService.deleteUserProductList(_id).subscribe(
      res => {
        this.userShoppingLists = [];
        this.getProductLists(this.userId);
      },
      err => {
      }
    );
  }

  // Fonction permettant d'ouvrir une boîte de dialogue et de modifier la liste (titre seulement pour le moment)
  updateList(_id) {
    let productListIdToSend = '';
    let productListTitleToSend = '';
    let userShoppingProducts: any = [];

    this.userShoppingLists.forEach(element => {
      if (element._id === _id) {
        productListIdToSend = element._id;
        productListTitleToSend = element.listTitle;
        userShoppingProducts = element.products;
      }
    });

    const dialogRef = this.dialog.open(CfgProductListDialogComponent, {
      data: {
        _id: productListIdToSend,
        listTitle: productListTitleToSend,
        products: userShoppingProducts
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userShoppingLists = [];
      this.getProductLists(this.userId);
    });
  }

  // Fonction permettant de récupérer toutes les listes de l'utilisateur
  getProductLists(userId) {
    this.productListsService.getUserProductLists(userId).subscribe(
      res => {
        this.userShoppingLists = res['response'];
      },
      err => {
      }
    );
  }

}

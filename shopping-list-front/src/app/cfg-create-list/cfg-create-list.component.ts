import { CfgProductsService } from './../cfg-services/cfg-products.service';
import { CfgProductListService } from '../cfg-services/cfg-product-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CfgUserService } from '../cfg-services/cfg-user.service';
import * as moment from 'moment';
import { MatSelect, MatSelectModule } from '@angular/material/select';

interface Categories {
  productCategory: string;
  productCategoryId: string;
}

@Component({
  selector: 'app-cfg-create-list',
  templateUrl: './cfg-create-list.component.html',
  styleUrls: ['./cfg-create-list.component.css']
})
export class CfgCreateListComponent implements OnInit {

  // Variables
  title = 'Ajouter une liste';
  imgPath = '../../assets/img/list.png';
  userId = '';
  productsCatalogue: any = [];
  productsChoosen: any = [];
  productsByCategory: any = [];
  categoryId = '';
  titleInput = document.getElementById('titleInput') as HTMLButtonElement;
  config: any;
  labels = {
    previousLabel: 'Précédent',
    nextLabel: 'Suivant'
  }
  matSelectorValue = '0';


  // Constructeur
  constructor(
    private userService: CfgUserService,
    private productsService: CfgProductsService,
    private productListService: CfgProductListService,
    private toastr: ToastrService
  ) {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.productsByCategory.count
    };
  }

  // Catégories pour le "select"
  categories: Categories[] = [
    {
      productCategory: 'Boissons Soft',
      productCategoryId: '1'
    },
    {
      productCategory: 'Boissons Alcolisées',
      productCategoryId: '2'
    },
    {
      productCategory: 'Fromages',
      productCategoryId: '3'
    },
    {
      productCategory: 'Charcuteries',
      productCategoryId: '4'
    },
    {
      productCategory: 'Pains',
      productCategoryId: '5'
    },
    {
      productCategory: 'Apéritifs (Salé)',
      productCategoryId: '6'
    },
    {
      productCategory: 'Apéritifs (Sucré)',
      productCategoryId: '7'
    },
    {
      productCategory: 'Surgelés',
      productCategoryId: '8'
    }
  ];

  ngOnInit(): void {
    // On récupère tout les produits du catalogue lors de l'initialisation du composant
    this.getProductsList();
    // On récupère l'id de l'utilisateur
    this.userService.getUserProfile().subscribe(
      res => {
        this.userId = res['user']._id;
      },
      err => {
      }
    );
  }

  // Fonction permettant de récupérer tout les produits du catalogue
  getProductsList() {
    this.productsService.getProducts().subscribe(
      res => {
        this.productsCatalogue = res['catalogue'];
      },
      err => {
      }
    );
  }

  // Fonction permettant de définir 'categoryId' pour afficher les bons produits selon la catégorie (voir => html)
  changeCategory(event) {
    this.categoryId = event.productCategoryId;
    this.productsByCategory = [];
    this.config.currentPage = 1;

    this.productsCatalogue.forEach(element => {
      if (element.productCategoryId === event.productCategoryId) {
        this.productsByCategory.push(element);
      }
    });
  }


  // Fonction permettant d'ajouter ou de retirer un produit séléctionné par l'utilisateur
  addOrRemoveProduct(product) {
    const inputElement = document.getElementById('button_' + product._id) as HTMLButtonElement;
    if (!this.productsChoosen.includes(product)) {
      this.productsChoosen.push(product);
      inputElement.innerText = 'Retirer';
    } else {
      const tempProductChoosen = this.productsChoosen.filter((item) => item._id !== product._id);
      this.productsChoosen = [];
      this.productsChoosen = tempProductChoosen;
      inputElement.innerText = 'Ajouter';
    }
  }

  // Fonction permettant de setter la bonne classe css (Vert ou Rouge) pour les boutons de chaque produit (voir html)
  productIsInList(product): boolean {
    if (this.productsChoosen.includes(product)) {
      return true;
    } else {
      return false;
    }
  }


  // Fonction appelé lorsque l'utilisateur souhaite valider et crée sa liste
  validateList() {
    let title = document.getElementById('titleInput') as HTMLButtonElement;

    // On vérifie si l'utilisateur a bien saisi un titre et choisi au minimum un produit
    if (this.productsChoosen.length === 0 || title.value.length === 0) {
      this.toastr.info('Veuillez saisir un titre et choisir au minimum 1 produit', 'Info');
    } else {
      this.addNewList(title.value);
    }
  }

  // Fonction permettant d'ajouter la nouvelle liste de course crée par l'utilisateur
  addNewList(title) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let totalAmount = this.calculateTotalAmount();

    const selectedProducts = {
      userId: this.userId,
      listTitle: title,
      creationDate: new Date().toLocaleDateString(undefined, options),
      products: this.newProductArray(),
      totalAmount: totalAmount
    };

    this.productListService.setNewProductList(selectedProducts).subscribe((data) => {
      this.toastr.info('Votre liste de courses a bien été crée', 'Success');
      this.resetAll();
    });
  }

  // Fonction permettant de calculer le montant approximatif de la liste de course
  calculateTotalAmount() {
    let totalAmount = 0;

    this.productsChoosen.forEach(element => {
      const inputElement = document.getElementById(element._id) as HTMLInputElement;
      const productPrice = parseFloat(element.productPrice);
      const productQte = parseFloat(inputElement.value);
      totalAmount = totalAmount + ( productPrice * productQte);
    });

    return totalAmount;
  }


  // Fonction qui retourne un nouveau Array pour le payload de 'setNewProductList()'
  newProductArray() {
    const newProductArray = [];
    this.productsChoosen.forEach(element => {
      const inputElement = document.getElementById(element._id) as HTMLInputElement;
      const productQte = parseFloat(inputElement.value);

      newProductArray.push({
        productId: element._id,
        productName: element.productName,
        productDescription: element.productDescription,
        productQte: productQte,
        productCategory: element.productCategory,
        procuctCategoryId: element.productCategoryId,
        productImg: element.productImg
      });
    });

    return newProductArray;
  }

  // Fonction qui permet de clean l'écran après avoir ajouter la nouvelle liste de courses
  resetAll() {
    let titleInput = document.getElementById('titleInput') as HTMLButtonElement;

    titleInput.value = '';
    titleInput.innerText = '';
    this.matSelectorValue = '0';
    this.productsChoosen = [];
    this.productsByCategory = [];
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}

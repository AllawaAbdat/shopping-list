import { CfgProductsService } from './../cfg-services/cfg-products.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


interface Categories {
  productCategory: string;
  productCategoryId: string;
}

@Component({
  selector: 'app-cfg-add-product',
  templateUrl: './cfg-add-product.component.html',
  styleUrls: ['./cfg-add-product.component.css']
})
export class CfgAddProductComponent implements OnInit {

  // Variables
  title = 'Ajouter un produit';
  imgPath = '../../assets/img/addProduct.png';
  matSelectorValue = '0';
  categoryId = '';

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

  constructor(
    private productsService: CfgProductsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  // Fonction permettant de définir 'categoryId' pour afficher les bons produits selon la catégorie (voir => html)
  changeCategory(event) {
    this.categoryId = event.productCategoryId;
  }

  // Fonction permettant d'ajouter un nouveau produit au catalogue
  createNewProduct() {
    const productNameInput = document.getElementById('productNameInput') as HTMLInputElement;
    const productDescriptionTextArea = document.getElementById('productDescriptionTextArea') as HTMLTextAreaElement;
    const productPriceInput = document.getElementById('productPriceInput') as HTMLInputElement;
    const productCategoryText = this.categories.find(category => category.productCategoryId === this.categoryId).productCategory;

    if (productNameInput.value.length === 0 || productDescriptionTextArea.value.length === 0 || productPriceInput.value.length === 0 || productCategoryText.length === 0) {
      this.toastr.info('Veuillez remplir tout les champs du formulaire', 'Info');
    } else {
      const newProduct = {
        productName: productNameInput.value,
        productDescription: productDescriptionTextArea.value,
        productPrice: productPriceInput.value,
        productCategory: productCategoryText,
        productCategoryId: this.categoryId,
        productImg: ''
      };

      this.productsService.createProduct(newProduct).subscribe((data) => {
        this.toastr.info('Votre produit à bien été ajouté à notre catalogue !', 'Success');
        this.resetAll();
      });
    }

  }

  // Fonction qui permet de clean l'écran après avoir ajouter la nouvelle liste de courses
  resetAll() {
    const productNameInput = document.getElementById('productNameInput') as HTMLInputElement;
    const productDescriptionTextArea = document.getElementById('productDescriptionTextArea') as HTMLTextAreaElement;
    const productPriceInput = document.getElementById('productPriceInput') as HTMLInputElement;

    productNameInput.value = '';
    productNameInput.innerText = '';

    productDescriptionTextArea.value = '';
    productDescriptionTextArea.innerText = '';

    productPriceInput.value = '';
    productPriceInput.innerText = '';

    this.matSelectorValue = '0';
  }

}

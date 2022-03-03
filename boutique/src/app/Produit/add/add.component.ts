import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/Produit';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  produitForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    prix: new FormControl(''),
  });

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Ajouter() {
    const newProduit = this.produitForm.value;
    console.log(newProduit)
    this.service.createProduits(newProduit)
      .subscribe(
        (produit: Produit) => {
          alert("Ajouté avec succes!");
          this.router.navigate(["list"]);
        })

  }

}

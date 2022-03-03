import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Model/Produit';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  produit: Produit = new Produit();

  produitForm = new FormGroup({
    id: new FormControl(''),
   name: new FormControl(''),
   description: new FormControl(''),
   prix: new FormControl(''),
 });
  constructor(
    private router: Router,
    private service: ServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    const produitId = this.route.snapshot.params['produitId'];
    
    this.service.getProduitId(produitId)
      .subscribe(
        (produit:Produit) => {
          this.produitForm.patchValue(produit);
        }
      );
  }

  Update() {
    const updateForm = this.produitForm.value;
    this.service.updateProduit(updateForm)
      .subscribe(
       (produit: Produit) => {
        console.log("update ok");
        this.router.navigate(["list"]);
      })
  }
  


}

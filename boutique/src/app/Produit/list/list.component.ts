import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  produits:any;
  users?:User[];
  searchKey: string = "";
  searchTerm: string = "";

  constructor(
    private service:ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.getProduits()
      .subscribe(data=>{
        this.produits = data;
        console.log(this.produits)
      })

      this.service.getUserList()
    .subscribe(data => {
      this.users=data;
      console.log(this.users)
      //console.log(this.users[0].roles![0].name)
      console.log(this.users[0].idUser == 1)
      })


      this.service.search.subscribe((val:any) =>{
        this.searchKey = val;
      })
  }

  Search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
 }

  NewProduit(){
    this.router.navigate(["add"]);
  }

  remove(produitId:any){
    this.service.deleteProduit(produitId)
     .subscribe( (data:any) =>{
       this.produits = this.produits?.filter((produit: { id: any; }) => produitId !== produit.id);
         alert("Produit supprimé");
       this.router.navigate(["list"]);
     })
   }
}

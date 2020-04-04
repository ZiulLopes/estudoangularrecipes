import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';  

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Omelete de queijo', '2 ovos, bata bem e jogue na frigideira com oleo quente', 'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-3140-87a93774551365fd9a5e81533b9a9da3.jpg'),
    new Recipe('Massa de torta', 'Bata tudo no liquidificador, junte a massa e o recheio em uma forma untada e asse por 40min', 'https://s2.glbimg.com/l4V28tFxg5maNvdmPylN0QcRdCI=/0x0:640x480/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/06/18/13_34_22_683_massa_de_torta_de_liquidificador.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

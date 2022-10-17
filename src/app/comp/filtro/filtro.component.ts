import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  facultades = ["FIEC", "FCNM"];
  categorias = [
    "Acería",
    "Acreditado",
    "Acuicultura y pesca",
    "Agricultura",
    "Aguas",
    "Aire",
    "Alimentos",
    "Ambiente",
    "Análisis de falla",
    "Análisis instrumental",
    "Apps",
    "Arqueología",
    "Automatización",
    "Bebidas",
    "Biología",
    "Biomedicina",
    "Bioquímica",
    "Botánica",
    "Bromatología",
    "Calibración",
    "Calor",
    "Comportamiento del consumidor",
    "Construcciones",
    "Corrosión",
    "Drones",
    "Economía",
    "Eléctrico",
    "Embarcaciones/buques/navíos",
    "Física",
    "Geología y geotecnia",
    "Hidrocarburos",
    "Materiales",
    "Mecánica",
    "Metales pesados",
    "Metalurgia",
    "Microorganismos",
    "Minería",
    "No destructivo",
    "Nutrición",
    "Océano y sus especies",
    "Petróleo",
    "Piedras preciosas y rocas",
    "Plásticos",
    "Potencia",
    "Programación",
    "Química",
    "Radiofrecuencia",
    "Realidad virtual y videojuegos",
    "Robótica",
    "Salud",
    "Simulación",
    "Soldadura",
    "Suelos",
    "Telecomunicaciones",
    "Turismo"
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

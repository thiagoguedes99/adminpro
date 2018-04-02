import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router, private titulo: Title, private meta: Meta ) {
    // this.route.events
    //   .filter( event => event instanceof ActivationEnd )
    //   // .filter((event: ActivationEnd) => event.snapshot.firstChild === null)
    //   // .map((event: ActivationEnd) => event.snapshot.data)
    //   .subscribe( event => console.log(event) )

    // this.router.events
    // .filter( evento => evento instanceof ActivationEnd  )
    // .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
    // .map( (evento: ActivationEnd) => evento.snapshot.data );

    // this.url.data.subscribe(titulo => console.log(titulo));
    // console.log(this.url);

    // this.router.
    // .filter(evento => evento instanceof ActivationEnd)
    // .subscribe(evento => console.log(evento));

    // console.log(router.events.subscribe(e => console.log(e)));

    this.titulo.setTitle('breadcrumbs');

    let metaTag: MetaDefinition = {
      name: 'author',
      content: 'thiago guedes'
    }

    this.meta.updateTag(metaTag);
  }

  ngOnInit() {
  }

}

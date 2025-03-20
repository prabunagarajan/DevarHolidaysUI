import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('collapsedCard', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('400ms ease-in-out'))
    ]),
    trigger('cardRemove', [
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0, display: 'none' })),
      transition('open <=> closed', animate('400ms')),
    ]),
    trigger('zoomCard', [
      state('normal', style({ transform: 'scale(1)' })),
      state('full', style({ transform: 'scale(1.1)' })),
      transition('normal <=> full', animate('400ms ease-in-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() cardTitle = '';
  @Input() cardClass = '';
  @Input() blockClass = '';
  @Input() headerClass = '';
  @Input() options = true;
  @Input() hidHeader = false;
  @Input() customHeader = false;
  @Input() cardCaption = '';
  @Input() captionClass = '';
  @Input() isCardFooter = false;
  @Input() footerClass = '';

  public fullIcon = 'icon-maximize';
  public collapsedCard = 'expanded';
  public collapsedIcon = 'icon-minus';
  public loadCard = false;
  public cardRemove = 'open';
  public cardState = 'normal';

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    if (this.hidHeader) {
      this.options = false;
    }
  }

  fullCardToggle() {
    this.cardState = this.cardState === 'normal' ? 'full' : 'normal';
    this.fullIcon = this.cardState === 'normal' ? 'icon-maximize' : 'icon-minimize';
    this.cardClass = this.cardState === 'full' ? 'full-card' : '';
  }

  collapsedCardToggle() {
    this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
  }

  cardRefresh() {
    this.loadCard = true;
    setTimeout(() => {
      this.loadCard = false;
    }, 3000);
  }

  cardRemoveAction() {
    this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
  }
}

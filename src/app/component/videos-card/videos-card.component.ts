import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SuggestedVideoModal } from 'src/app/provider/base/base.model';

@Component({
  standalone:true,
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss'],
  imports:[IonicModule]

})
export class VideosCardComponent  implements OnInit {

  @Input() singleVideo:SuggestedVideoModal;

  constructor() { }

  ngOnInit() {

  }

}

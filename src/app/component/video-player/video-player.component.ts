import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';
import { SuggestedVideoModal } from 'src/app/provider/base/base.model';

@Component({
  standalone:true,
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  imports:[IonicModule,BackButtonComponent]
})
export class VideoPlayerComponent  implements OnInit {

  video:SuggestedVideoModal;

  constructor() { }

  ngOnInit() {
    this.video=history.state['video'];
    console.log(this.video);
  }

}

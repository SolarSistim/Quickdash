import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Quickdash';

  constructor(
    private dataService: DataServiceService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.dataService.getBoardData().subscribe(data => {
      const bgColor = data['quickdash-settings'][0].theme['background-color'];
      this.renderer.setStyle(document.body, 'backgroundColor', bgColor);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { BoardComponent } from '../../components/board/board.component';

interface QuickdashSettings {
  'background-color': string;
}

@Component({
  selector: 'app-quickdash',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  templateUrl: './quickdash.component.html',
  styleUrls: ['./quickdash.component.css']
})
export class QuickdashComponent implements OnInit {



  constructor() {}

  ngOnInit() {

  }

}

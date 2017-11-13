import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'la-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  @Input() themes: Theme[] = [];

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.sub1 = this.themeService.getThemes()
      .subscribe((themes: Theme[]) => {
        this.themes = themes;
      });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }

}

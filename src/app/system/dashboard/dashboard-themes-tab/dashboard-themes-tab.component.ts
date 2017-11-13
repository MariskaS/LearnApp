import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Theme } from '../../shared/models/theme.model';
import { Message } from '../../../shared/models/message.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'la-dashboard-themes-tab',
  templateUrl: './dashboard-themes-tab.component.html',
  styleUrls: ['./dashboard-themes-tab.component.scss']
})
export class DashboardThemesTabComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub1: Subscription;

  // message: Message;

  constructor(private themeService: ThemeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.message = new Message('danger', '');
    //
    // this.route.queryParams
    //   .subscribe((params: Params) => {
    //     if (params['nowCanLogin']) {
    //       this.showMessage({
    //         text: 'New Theme is added',
    //         type: 'success'
    //       });
    //     }
    //   });

    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required])
    });
  }

  // private showMessage(message: Message) {
  //   this.message = message;
  //   window.setTimeout(() => {
  //     this.message.text = '';
  //   }, 5000);
  // }

  onSubmit() {
    const {name} = this.form.value;
    const theme = new Theme(name);

    this.sub1 = this.themeService.createNewTheme(theme)
      .subscribe(() => {
        this.router.navigate(['/system', 'dashboard'], {
          queryParams: {
            addTheme: true
          }
        });
      });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }
}

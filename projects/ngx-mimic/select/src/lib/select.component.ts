import { AfterViewInit, Component, ContentChildren, OnDestroy, QueryList, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';

import { Subscription } from 'rxjs';
import { MmcSelectComponent } from './mmc-select/mmc-select.component';

@Component({
  selector: 'mmc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class MmcSelect<T = any> implements AfterViewInit, OnDestroy {
  private _subs: Subscription[] = [];

  @ContentChildren(MatOption)
  private _userOptions!: QueryList<MatOption<T>>;

  @ViewChild(MmcSelectComponent, { static: true })
  private _component!: MmcSelectComponent<T>;

  constructor() { }

  ngAfterViewInit(): void {
    this._subs.push(
      this._userOptions.changes.subscribe({
        next: this.onUserOptionsChanges.bind(this)
      }),
      this._component.valueChanges.subscribe({
        next: this.onValueChanges.bind(this)
      })
    );

    this._userOptions.notifyOnChanges();
  }

  ngOnDestroy(): void {
      
  }

  onUserOptionsChanges(): void {
    const data = this._userOptions.toArray();
    this._component.updateOptions(data);
  }

  onValueChanges(v: T): void {
    console.log('value ->', v);
  }
}

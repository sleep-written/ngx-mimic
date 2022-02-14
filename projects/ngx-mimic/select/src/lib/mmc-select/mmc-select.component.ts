import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';

import { Item } from '../interfaces';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'lib-mmc-select',
  templateUrl: './mmc-select.component.html',
  styleUrls: ['./mmc-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MmcSelectComponent<T> implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  private _options: Item<T>[] = [];
  private _selected: Item<T> | null = null;

  @ViewChild(MatInput, { static: true })
  private _input!: MatInput;

  valueChanges = new EventEmitter<T>();
  options!: Observable<Item<T>[]>;
  control = new FormControl;

  constructor(
    private _changeDet: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.options = this.control.valueChanges.pipe(
      startWith(''),
      map((x: string | Item<T>) => typeof x === 'string' ? x : x?.text),
      map( x => x ? this.filter(x) : this._options.slice())
    );

    this._subs.push(
      this.control.valueChanges.subscribe({
        next: this.onValueChange.bind(this)
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.forEach(x => x.unsubscribe());
  }

  updateOptions(data: MatOption[]): void {
    this._options = data.map(x => ({
      text: x.getLabel(),
      value: x.value
    }));

    this.control.updateValueAndValidity();
    this._changeDet.detectChanges();
  }

  filter(value: string): Item<T>[] {
    // Filter products
    const a = value.toLowerCase();
    return this._options.filter(x => {
      const b = x?.text?.toLowerCase() ?? '';
      return b.includes(a);
    });
  }

  displayFn(item: Item<T>): string {
    return item?.text ?? '';
  }

  onValueChange(v: Item<T> | string): void {
    if (v && typeof v !== 'string') {
      this._selected = v;
      this.valueChanges.emit(v.value);
    } else {
      console.log('text ->', v);
    }
  }

  onBlur(): void {
    const v = this.control.value as Item<T> | string;
    if (typeof v === 'string') {
      if (this._selected) {
        this.control.setValue(this._selected);
      } else {
        this.control.setValue(v);
      }

    } else if (v) {
      this.valueChanges.emit(v.value);
    }
  }
}

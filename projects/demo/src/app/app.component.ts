import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

interface Item {
  text: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  data: Item[] = [
    { text: 'Item 01', value: 1 },
    { text: 'Item 02', value: 2 },
    { text: 'Item 04', value: 4 },
    { text: 'Item 05', value: 5 },
    { text: 'Item 06', value: 6 },
  ];

  constructor(
    private _changeDet: ChangeDetectorRef,
  ) { }

  async ngOnInit(): Promise<void> {
    await new Promise<void>(resolve => setTimeout(resolve, 2000));
    this.data.push({ text: 'Item 666', value: 666 });
    this.data.push({ text: 'Item 999', value: 999 });
    this._changeDet.detectChanges();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'web-shell-wrapper',
  styleUrls: ['wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="web-shell-wrapper rad-light-theme">
      <ng-content></ng-content>
    </div>
  `,
})
export class ShellWrapperComponent  {
}

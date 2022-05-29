import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidebarService } from '../../sidebar/sidebar.service';

@Component({
  selector: 'web-shell-single-column',
  styleUrls: ['./single-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <web-shell-wrapper *ngrxLet="sidebarService.isExpanded$ as isExpanded">
      <div [class.shrink-layout]="!isExpanded" class="single-column-shell">
        <web-shell-sidebar></web-shell-sidebar>
        <div class="content">
          <ng-content></ng-content>
        </div>
      </div>
    </web-shell-wrapper>
  `,
})
export class SingleColumnShellComponent {
  constructor(public readonly sidebarService: SidebarService) {}

  @Input()
  set expand(value: boolean) {
    this.sidebarService.toggle(value);
  }
}

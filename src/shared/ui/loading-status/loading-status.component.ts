import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingStatus } from 'src/shared/types/loading-status';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-loading-status',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loading-status.component.html',
    styleUrls: ['./loading-status.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingStatusComponent {
    @Input() public loadingStatus$?: Observable<LoadingStatus>;
}

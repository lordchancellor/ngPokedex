import { Subject, Observable } from 'rxjs';

export class UserFeedbackService {

	private spinnerSource: Subject<any> = new Subject();

	public spinner: Observable<any> = this.spinnerSource.asObservable();

	public toggleSpinner(): void {
		this.spinnerSource.next();
	}

}

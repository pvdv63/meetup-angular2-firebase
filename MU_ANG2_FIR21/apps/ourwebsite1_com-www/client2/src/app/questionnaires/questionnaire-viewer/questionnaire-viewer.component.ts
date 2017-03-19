import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionModel } from '../../models/question.model';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { QuestionnaireListComponent } from '../shared/questionnaire-list/questionnaire-list.component';

@Component({
  selector: 'app-questionnaire-viewer',
  templateUrl: './questionnaire-viewer.component.html',
  styleUrls: ['./questionnaire-viewer.component.scss'],
  providers: [QuestionnaireService]
})
export class QuestionnaireViewerComponent implements OnInit {

  count: number = 0;
  offset: number = 0;
  limit: number = 9999; // choose an appropriate number
  range: number = 0; // not enough space for more
  questions: QuestionModel[] = [];
  loading: boolean = false;
  failed: boolean = false;

  constructor(
		private router: Router,
		private route: ActivatedRoute,  
		private questionnaireService: QuestionnaireService
  ) { }

  ngOnInit() {
		let observable = this.route.params
		  .map(params => params['nr'])
		  .map(pageNr => (pageNr - 1) * this.limit);
		observable.subscribe(offset => this.offset = offset);
		observable.share().subscribe(offset => this.getAll(offset, this.limit));
  }

  getAll(offset: number, limit: number) {
    this.questions = [];
    this.loading = true;
    this.failed = false;
    this.questionnaireService.getAll(offset, limit).subscribe(result => {
      this.questions = result['questions'];
      this.count = result['count'];	
	    this.loading = false;
    }, () => {
      this.loading = false;
      this.failed = true;
    });
  }

// 	viewQuestion(questionId: number) {
// 		console.log("QuestionnaireViewerComponent - viewQuestion called with questionId = ", questionId);
//     this.router.navigate(['/question', questionId]);
// 	}

// 	editQuestion(questionId: number) {
// 		console.log("QuestionnaireViewerComponent - editQuestion called with questionId = ", questionId);
//     this.router.navigate(['/question', questionId, 'edit']);
// 	}

  onPageChange(offset) {
		console.log("QuestionnaireViewerComponent - onPageChange called with offset = ", offset);
    this.offset = offset;
    this.router.navigate(['/questionnaire/page', (offset / this.limit) + 1]);
  }

}

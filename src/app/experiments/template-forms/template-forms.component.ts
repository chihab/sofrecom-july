import { Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelDirective } from '../custom-directives/model/model.directive';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule, ModelDirective], // [NgModel]
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css',
})
export class TemplateFormsComponent {
  value1 = '';
  value2 = '';

  onSubmit(form: any) {
    console.log(form);
  }
}

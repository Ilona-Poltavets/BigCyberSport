import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {
  @Output()team=new EventEmitter();
  showForm=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm:any){
    const fields=myForm.form.controls;
    this.showForm=false;
    this.team.emit({
      name:fields.name.value,
      discipline:fields.discipline.value,
      coach:fields.coach.value,
      playerQuantity:fields.playerQuantity.value,
    })
  }
}

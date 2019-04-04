import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-emp-dtls',
  templateUrl: './emp-dtls.component.html',
  styleUrls: ['./emp-dtls.component.scss']
})
export class EmpDtlsComponent implements OnInit {

  constructor() { }

  @Input() empDtls;

  ngOnInit() {
  }

}

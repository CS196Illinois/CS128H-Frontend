import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StaffService } from "src/app/services/staff.service";
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {

  constructor(private StaffService: StaffService, private ref: ChangeDetectorRef, private router: Router, private route: ActivatedRoute) { }
  staff = []
  email = new FormControl('')
  status = new FormControl('')

  refreshComp() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate(['./'], {
      relativeTo: this.route
    })
  }

  addStaff() {
    let submit = confirm("Are you sure you want to add this staff?")
    if (submit) {
      const staffObj = { 'email': this.email.value, 'status': this.status.value }
      this.StaffService.addStaff(JSON.stringify(staffObj))
      this.refreshComp()
    }
  }
  delStaff(email: string) {
    let submit = confirm("Are you sure you want to delete this staff?")
    if (submit) {
      const payload = { 'email': email }
      this.StaffService.delStaff(JSON.stringify(payload))
      this.refreshComp()
    }
  }

  ngOnInit() {
    this.StaffService.getStaff().subscribe((staff) => {
      this.staff = staff["staff"]
      this.ref.detectChanges()
    })
  }

}

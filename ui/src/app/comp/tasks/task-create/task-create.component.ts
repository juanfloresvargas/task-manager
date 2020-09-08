import { Component, OnInit } from '@angular/core';
import { Department, Task } from 'src/app/shared/_models';
import { DepartmentsService } from 'src/app/shared/_services/';
import { TasksService } from 'src/app/shared/_services/tasks.service';
import { FormGroup, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  public imagePath;
  createTask: FormGroup;
  departments: Department[];


  imgURL: any;
  constructor(private formBuilder: FormBuilder,
    private departmentsSvc: DepartmentsService,
    private taskSvc: TasksService) {
    this.departments = [];
  }

  ngOnInit(): void {
    this.createTask = this.formBuilder.group({
      title: [''],
      department: [''],
      description: [''],
      priority: ['low'],
    });

    this.departmentsSvc.list().subscribe(data => {
      console.log(data);
      this.departments = data;
    })
  }

  imgInputChange(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  save() {
    const taskInfo: Task = {
      title: this.createTask.get("title").value,
      description: this.createTask.get("description").value,
      department: this.createTask.get("department").value,
      state: 'new',
      priority: this.createTask.get("priority")?.value,
      assigned_to: 1,
    }
    this.taskSvc.create(taskInfo).subscribe(d => {
      console.log(d);
    });
  }

}

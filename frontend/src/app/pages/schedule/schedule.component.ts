import { Component } from '@angular/core';

export interface ScheduleElemForTable {
  position: number;
  name: string;
  type: string;
  date: string;
  isDivider: boolean
}

const SCHEDULE_DATA_FOR_TABLE: (ScheduleElemForTable )[] = [ // | WeekDivider
  {position: 1, name:'Week 1', type:'', date: '', isDivider: true},
  {position: 1, name: 'Info Video', type:'Lecture', date: '1/18/2022', isDivider: false},

  {position: 1, name:'Week 2', type:'', date: '', isDivider: true},
  {position: 1, name: 'Rust Setup', type:'Lecture', date: '1/25/2022', isDivider: false},
  {position: 1, name: 'Rust Basics Part 1 - Variables, Control Flow', type:'Lecture', date: '1/27/2022', isDivider: false},
  {position: 1, name: 'Optional Rust Practice', type:'Homework', date: '1/27/2022', isDivider: false},

  {position: 1, name:'Week 3', type:'', date: '', isDivider: true},
  {position: 1, name: 'Rust Basics Part 2 - Functions, Compound Data Types', type:'Lecture', date: '2/1/2022', isDivider: false},
  {position: 1, name: 'Rust Basics Part 3 - Enums, Matching', type:'Lecture', date: '2/3/2022', isDivider: false},

  {position: 1, name: 'Release MP0', type:'MP', date: '2/3/2022', isDivider: false},

  {position: 1, name: 'Release Homework 1 (Functions, Control Flow, Matching)', type:'Homework', date: '2/1/2022', isDivider: false},
  {position: 1, name: 'Release Homework 2 (Some/None, Result, Enums)', type:'Homework', date: '2/3/2022', isDivider: false},


  {position: 1, name:'Week 4', type:'', date: '', isDivider: true},
  {position: 1, name: 'Rust Basics Part 4 - Examples, Ownership', type:'Lecture', date: '2/8/2022', isDivider: false},
  {position: 1, name: 'Ownership in Rust - Ownership, Borrowing', type:'Lecture', date: '2/10/2022', isDivider: false},

  {position: 1, name: 'Release MP1', type:'MP', date: '2/10/2022', isDivider: false},
  {position: 1, name: 'Due: MP0', type:'MP', date: '2/11/2022', isDivider: false},

  {position: 1, name: 'Due: Homework 1', type:'Homework', date: '2/8/2022', isDivider: false},
  {position: 1, name: 'Release Homework 4 (Basic Ownership, basic transferring/borrowing)', type:'Homework', date: '2/10/2022', isDivider: false},
  {position: 1, name: 'Due: Homework 2', type:'Homework', date: '2/8/2022', isDivider: false},
  {position: 1, name: 'Release Homework 4 (Basic Ownership, basic transferring/borrowing)', type:'Homework', date: '2/10/2022', isDivider: false},

  {position: 1, name:'Week 5', type:'', date: '', isDivider: true},
  {position: 1, name: 'Transferring Ownership', type:'Lecture', date: '2/15/2022', isDivider: false},
  {position: 1, name: 'Structs in Rust', type:'Lecture', date: '2/17/2022', isDivider: false},

  {position: 1, name: 'Due: Homework 3', type:'Homework', date: '2/15/2022', isDivider: false},
  {position: 1, name: 'Release Homework 5 (Borrowing, Ownership & Functions)', type:'Homework', date: '2/15/2022', isDivider: false},
  {position: 1, name: 'Due: Homework 4', type:'Homework', date: '2/17/2022', isDivider: false},
  {position: 1, name: 'Release Homework 6 (More ownership practice, with a struct, no impl)', type:'Homework', date: '2/17/2022', isDivider: false},

  {position: 1, name:'Week 6', type:'', date: '', isDivider: true},
  {position: 1, name: 'Structs Continued - Method Syntax, Generics', type:'Lecture', date: '2/22/2022', isDivider: false},
  {position: 1, name: 'Struct Examples', type:'Lecture', date: '2/24/2022', isDivider: false},

  {position: 1, name: 'Release MP2', type:'MP', date: '2/22/2022', isDivider: false},
  {position: 1, name: 'Due: MP1', type:'MP', date: '2/23/2022', isDivider: false},

  {position: 1, name: 'Due: Homework 5', type:'Homework', date: '2/22/2022', isDivider: false},
  {position: 1, name: 'Release Homework 7 (basic structs, w/ impl)', type:'Homework', date: '2/22/2022', isDivider: false},
  {position: 1, name: 'Due: Homework 6', type:'Homework', date: '2/24/2022', isDivider: false},
  {position: 1, name: 'Release Homework 8 (more structs w/ impl, maybe generics)', type:'Homework', date: '2/24/2022', isDivider: false},


  {position: 1, name:'Week 7', type:'', date: '', isDivider: true},
  {position: 1, name: 'Parallelism/Concurrency ', type:'Lecture', date: '3/1/2022', isDivider: false},
  {position: 1, name: 'Thread Ownership', type:'Lecture', date: '3/3/2022', isDivider: false},

  {position: 1, name: 'Release MP3', type:'MP', date: '3/3/2022', isDivider: false},
  {position: 1, name: 'Due: MP2', type:'MP', date: '3/4/2022', isDivider: false},

  {position: 1, name: 'Due: Homework 7', type:'Homework', date: '3/1/2022', isDivider: false},
  {position: 1, name: 'Release Homework 9 (spawning a single thread to do a task)', type:'Homework', date: '3/1/2022', isDivider: false},
  {position: 1, name: 'Due: Homework 8', type:'Homework', date: '3/3/2022', isDivider: false},
  {position: 1, name: 'Release Homework 10 (thread messaging and thread move)', type:'Homework', date: '3/3/2022', isDivider: false},

  {position: 1, name:'Week 8', type:'', date: '', isDivider: true},
  {position: 1, name: 'Threads & Messaging', type:'Lecture', date: '3/8/2022', isDivider: false},
  {position: 1, name: 'Shared State Messaging', type:'Lecture', date: '3/10/2022', isDivider: false},

  {position: 1, name: 'Due: Homework 9', type:'Homework', date: '3/8/2022', isDivider: false},
  {position: 1, name: 'Release Homework 11 (spawning a single thread to do a task)', type:'Homework', date: '3/8/2022', isDivider: false},
  {position: 1, name: 'Due: Homework 10', type:'Homework', date: '3/10/2022', isDivider: false},
  {position: 1, name: 'Release Homework 12 (thread messaging and thread move)', type:'Homework', date: '3/10/2022', isDivider: false},

  {position: 1, name:'Week 8.5', type:'', date: '', isDivider: true},
  {position: 1, name:'Spring break!', type:'', date: '', isDivider: false},

  {position: 1, name:'Week 9', type:'', date: '', isDivider: true},
  {position: 1, name: 'Intro to ML', type:'Lecture', date: '3/22/2022', isDivider: false},
  {position: 1, name: 'Final Project Kickoff', type:'Final Project', date: '3/24/2022', isDivider: false},

  {position: 1, name: 'Due: Homework 11', type:'Homework', date: '3/22/2022', isDivider: false},
  {position: 1, name: 'Due: Homework 12', type:'Homework', date: '3/24/2022', isDivider: false},
  
  {position: 1, name: 'Due: MP3', type:'MP', date: '3/25/2022', isDivider: false},

  {position: 1, name:'Week 10', type:'', date: '', isDivider: true},
  {position: 1, name:'Final Projects', type:'', date: '', isDivider: false},

  {position: 1, name: 'Debugging Special Lecture', type:'Lecture', date: '3/29/2022', isDivider: false},
  {position: 1, name: 'Special Topics Lecture', type:'Lecture', date: '4/1/2022', isDivider: false},

  {position: 1, name:'Week 11, 12, 13, 14', type:'', date: '', isDivider: true},
  {position: 1, name:'Final Projects; No HW, no MPs', type:'', date: '', isDivider: false},
  {position: 1, name:'1 Lecture Per Topic per Week. Current Topics: Parallelism, OOP, Functional Programming', type:'', date: '', isDivider: false},


  {position: 1, name:'Week 15', type:'', date: '', isDivider: true},
  {position: 1, name: 'Final Project Due', type:'Final Project', date: '5/4/2022', isDivider: false}

];


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent{

  dataSource = SCHEDULE_DATA_FOR_TABLE

  displayedColumns: string[] = ['name', 'type', 'date'];

  isGroup(item): boolean{
    return item.isGroupBy;
  }
}

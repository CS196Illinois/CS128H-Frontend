import { Component } from '@angular/core';

export interface ScheduleElemForTable {
  position: number;
  name: string;
  type: string;
  date: string;
  isDivider: boolean;
  isDescription:boolean;
}

const SCHEDULE_DATA_FOR_TABLE: (ScheduleElemForTable )[] = [ // | WeekDivider
  {position: 1, name:'Week 1', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Info Video', type:'Lecture', date: '8/23/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 2', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Rust Setup', type:'Lecture', date: '8/28/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Rust Basics Part 1 - Variables, Control Flow', type:'Lecture', date: '8/30/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 3', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Labor Day (all-campus holiday)', type:'', date: '9/4/2023', isDivider: false, isDescription:true},
  {position: 1, name: 'Release HW1: Variable Types and Control Flow', type: 'Homework', date: '9/4/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Rust Basics Part 2 - Functions, Compound Data Types', type:'Lecture', date: '9/6/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release MP0: Calculator', type: 'MP', date: '9/6/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW2: Enums, Option, and Result', type: 'Homework', date: '9/6/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 4', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Rust Basics Part 3 - Enums, Matching', type:'Lecture', date: '9/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW3: Scope and Ownership', type: 'Homework', date: '9/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW1', type: 'Due Date', date: '9/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Rust Basics Part 4 - Examples, Ownership', type:'Lecture', date: '9/13/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW4: Ownership and Vectors', type: 'Homework', date: '9/13/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW2', type: 'Due Date', date: '9/13/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 5', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Ownership in Rust - Ownership, Borrowing', type:'Lecture', date: '9/18/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release MP1: K-Nearest Neighbors', type:'MP', date: '9/18/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW5: More Ownership', type: 'Homework', date: '9/18/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW3', type: 'Due Date', date: '9/18/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Transferring Ownership', type: 'Lecture', date: '9/20/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: MP0', type: 'Due Date', date: '9/20/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW6: Structs', type: 'Homework', date: '9/20/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW4', type: 'Due Date', date: '9/20/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 6', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Structs in Rust', type:'Lecture', date: '9/25/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW7: Impl with Structs', type: 'Homework', date: '9/25/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW5', type: 'Due Date', date: '9/25/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release MP2: Hangman Game', type: 'MP', date: '9/27/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'More Structs', type: 'Lecture', date: '9/27/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW8: Structs with Generics', type: 'Homework', date: '9/27/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW6', type: 'Due Date', date: '9/27/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 7', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Due: MP1', type: 'Due Date', date: '10/2/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Structs and Generics', type: 'Lecture', date: '10/2/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW9: Basic Parallelism', type: 'Homework', date: '10/2/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW7', type: 'Due Date', date: '10/2/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Parallelism & Concurrency', type:'Lecture', date: '10/4/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW10: More Threads', type: 'Homework', date: '10/4/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW8', type: 'Due Date', date: '10/4/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Final Project Group Formations Due', type: 'Final Project', date: '10/5/2023', isDivider: false, isDescription: false},

  {position: 1, name: 'Week 8', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Release MP3: MapReduce', type: 'MP', date: '10/9/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Threads & Ownership', type:'Lecture', date: '10/9/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW11 (Tentative): TBD', type: 'Homework', date: '10/9/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW9', type: 'Due Date', date: '10/9/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: MP2', type: 'Due Date', date: '10/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Threads & Messaging', type: 'Lecture', date: '10/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Release HW12 (Tentative): TBD', type: 'Homework', date: '10/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW10', type: 'Due Date', date: '10/11/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Final Project Ideas/Plan Due', type: 'Final Project', date: '10/12/2023', isDivider: false, isDescription: false},

  {position: 1, name: 'Week 9', type: '', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Shared State Messaging', type: 'Lecture', date: '10/16/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW11', type: 'Due Date', date: '10/16/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Special Topics Lecture (Traits, Async, Solana, Blockchain, etc...)', type: 'Lecture', date: '10/18/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Due: HW12', type: 'Due Date', date: '10/18/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 10', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Due: MP3', type: 'Due Date', date: '10/23/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Special Topics Lecture (Traits, Async, Solana, etc...)', type: 'Lecture', date: '10/25/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 11', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Special Topics Lecture (Traits, Async, Solana, etc...)', type: 'Lecture', date: '11/1/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Final Project Checkpoint 1 Due', type: 'Final Project', date: '11/2/2023', isDivider: false, isDescription: false},

  {position: 1, name: 'Week 12', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Special Topics Lecture (Traits, Async, Solana, etc...)', type: 'Lecture', date: '11/8/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 13', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Special Topics Lecture (Traits, Async, Solana, etc...)', type: 'Lecture', date: '11/15/2023', isDivider: false, isDescription:false},
  {position: 1, name: 'Final Project Checkpoint 2 Due', type: 'Final Project', date: '11/16/2023', isDivider: false, isDescription: false},

  {position: 1, name: 'Week 14', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Fall Break!', type:'', date: '', isDivider: false, isDescription:true},

  {position: 1, name: 'Week 15', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Special Topics Lecture (Traits, Async, Solana, etc...)', type: 'Lecture', date: '11/29/2023', isDivider: false, isDescription:false},

  {position: 1, name: 'Week 16', type:'', date: '', isDivider: true, isDescription:false},
  {position: 1, name: 'Final Project Due (Reading Day)', type: 'Final Project', date: '12/1/2023', isDivider: false, isDescription: false}
];


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent{

  dataSource = SCHEDULE_DATA_FOR_TABLE

  displayedColumns: string[] = ['name', 'type', 'date'];
}

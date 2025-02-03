import { Component } from '@angular/core';

export interface ScheduleElemForTable {
  position: number;
  name: string;
  type: string;
  date: string;
  isDivider: boolean;
  isDescription: boolean;
}

const SCHEDULE_DATA_FOR_TABLE: (ScheduleElemForTable)[] = [ // | WeekDivider
  { position: 1, name: 'Week 2', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 1 - What is Rust? & Rust setup', type: 'Lecture', date: '1/28/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 2 - Rust basic concepts', type: 'Lecture', date: '1/30/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW1: Variable Types and Control Flow released', type: 'Homework', date: '1/30/2025', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 3', type: '', date: '', isDivider: true, isDescription: false },
  // { position: 1, name: 'Labor Day (all-campus holiday)', type: '', date: '', isDivider: false, isDescription: true },
  { position: 1, name: 'Add/Drop Deadline', type: 'Due Date', date: '2/3/2025', isDivider: false, isDescription: true },
  { position: 1, name: 'Lecture 3 - Compound datatypes released', type: 'Lecture', date: '2/4/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 4 - Enums, match', type: 'Lecture', date: '2/6/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW2: Enums, Option, and Result released', type: 'Homework', date: '2/6/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'MP0: Calculator released', type: 'MP', date: '2/6/2025', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 4', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 5 - Ownership & Scope', type: 'Lecture', date: '2/11/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW3: Introduction to Scope and Ownership released', type: 'Homework', date: '2/11/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 6 - References & Borrowing', type: 'Lecture', date: '2/13/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW4: Basic Ownership and Vectors released', type: 'Homework', date: '2/13/2025', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 5', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 7 - Slice type', type: 'Lecture', date: '2/18/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'MP1: K-Nearest Neighbors released', type: 'MP', date: '2/18/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW5: More Ownership released', type: 'Homework', date: '2/18/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 8 - Structs I (Defining and Instantiation)', type: 'Lecture', date: '2/20/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW6: Structs released', type: 'Homework', date: '2/20/2025', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 6', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 9 - Structs II (Method syntax, examples)', type: 'Lecture', date: '2/25/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW7: Impl with Structs released', type: 'Homework', date: '2/25/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Generics', type: 'Lecture', date: '2/27/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW8: Generics released', type: 'Homework', date: '2/27/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'MP2: Hangman Game released', type: 'MP', date: '2/27/2025', isDivider: false, isDescription: false },
  // { position: 1, name: 'Start Forming Final Project Groups', type: 'Project', date: '2/21/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 7', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 11 - Traits', type: 'Lecture', date: '3/4/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW9: Traits released', type: 'Homework', date: '3/4/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Start Forming Final Project Groups', type: 'Project', date: '3/4/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 12 - Threading basics', type: 'Lecture', date: '3/6/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW10: Parallelism released', type: 'Homework', date: '3/6/2025', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 8', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 13 - Threads & Ownership', type: 'Lecture', date: '3/11/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'HW11: Multithreading released', type: 'Homework', date: '3/11/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 14 - Message Passing with mpsc', type: 'Lecture', date: '3/13/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'MP3: Word Counter released', type: 'MP', date: '3/13/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Project Group Assignments Due', type: 'Due Date', date: '3/14/2025', isDivider: false, isDescription: true },
  { position: 1, name: 'Deadline to drop class without grade of W', type: 'Due Date', date: '3/14/2025', isDivider: false, isDescription: true },
 
  { position: 1, name: 'Spring Break', type: '', date: '', isDivider: true, isDescription: true },
  { position: 1, name: 'Special topic lectures released', type: 'Lecture', date: 'TBD', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 9', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 15 - Shared State released', type: 'Lecture', date: '3/25/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'HW12: Shared State', type: 'Homework', date: '3/25/2025', isDivider: false, isDescription: false },
  { position: 1, name: 'Project Proposal due', type: 'Due Date', date: '3/28/2025', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 10', type: '', date: '', isDivider: true, isDescription: false },

  { position: 1, name: 'Week 11', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Checkpoint 1 meetings', type: 'Final Project', date: '', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 12', type: '', date: '', isDivider: true, isDescription: false },

  { position: 1, name: 'Week 13', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Checkpoint 2 meetings', type: 'Final Project', date: '', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 14', type: '', date: '', isDivider: true, isDescription: false },

  { position: 1, name: 'Week 15', type: '', date: '', isDivider: true, isDescription: false },

  { position: 1, name: 'Finals', type: '', date: '', isDivider: true, isDescription: true },
];


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  dataSource = SCHEDULE_DATA_FOR_TABLE

  displayedColumns: string[] = ['name', 'type', 'date'];
}

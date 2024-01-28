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
  { position: 1, name: 'Week 1', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Welcome to CS198-128H!', type: 'Lecture', date: '1/18/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 2', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Rust Setup', type: 'Lecture', date: '1/23/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Rust Basics Part 1 - Variables, Control Flow', type: 'Lecture', date: '1/25/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Add/Drop Deadline', type: 'Due Date', date: '1/29/2024', isDivider: false, isDescription: true },

  { position: 1, name: 'Week 3', type: '', date: '', isDivider: true, isDescription: false },
  // { position: 1, name: 'Labor Day (all-campus holiday)', type: '', date: '', isDivider: false, isDescription: true },
  { position: 1, name: 'Release HW1: Variable Types and Control Flow', type: 'Homework', date: '1/25/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Rust Basics Part 2 - Functions, Compound Data Types', type: 'Lecture', date: '1/30/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Rust Basics Part 3 - Enums, Pattern Matching', type: 'Lecture', date: '2/1/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW2: Enums, Option, and Result', type: 'Homework', date: '2/1/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release MP0: Calculator', type: 'MP', date: '2/1/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 4', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Rust Basics Part 4 - Examples, Ownership', type: 'Lecture', date: '2/6/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW3: Introduction to Scope and Ownership', type: 'Homework', date: '2/6/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW1', type: 'Due Date', date: '9/11/2023', isDivider: false, isDescription: false },
  { position: 1, name: 'Ownership in Rust - Ownership, Borrowing', type: 'Lecture', date: '2/8/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW4: Basic Ownership and Vectors', type: 'Homework', date: '2/8/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release MP1: K-Nearest Neighbors', type: 'MP', date: '2/8/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Due: MP0', type: 'Due Date', date: '2/9/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW2', type: 'Due Date', date: '9/13/2023', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 5', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Slices, Program Memory, and Ownership', type: 'Lecture', date: '2/13/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW5: More Ownership', type: 'Homework', date: '2/13/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW3', type: 'Due Date', date: '9/18/2023', isDivider: false, isDescription: false },
  { position: 1, name: 'Structs', type: 'Lecture', date: '2/15/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW6: Structs', type: 'Homework', date: '2/15/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW4', type: 'Due Date', date: '9/20/2023', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 6', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Structs', type: 'Lecture', date: '2/20/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW7: Impl with Structs', type: 'Homework', date: '2/20/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release MP2: Hangman Game', type: 'MP', date: '2/20/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Due: MP1', type: 'Due Date', date: '2/21/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Start Forming Final Project Groups', type: 'Project', date: '2/21/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW5', type: 'Due Date', date: '9/25/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Extended OOP', type: 'Lecture', date: '2/22/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW8: Generics', type: 'Homework', date: '2/22/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW6', type: 'Due Date', date: '9/27/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 7', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Parallelism & Concurrency', type: 'Lecture', date: '2/27/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW9: Parallelism', type: 'Homework', date: '2/27/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW7', type: 'Due Date', date: '10/2/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Thread Ownership', type: 'Lecture', date: '2/29/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release HW10: Multithreading', type: 'Homework', date: '2/29/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Release MP3: Word Counter', type: 'MP', date: '2/29/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Due: MP2', type: 'Due Date', date: '3/1/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW8', type: 'Due Date', date: '10/4/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 8', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Thread Messaging', type: 'Lecture', date: '3/5/2024', isDivider: false, isDescription: false },
  { position: 1, name: '(Tentative) Release HW11: TBD', type: 'Homework', date: '3/5/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW9', type: 'Due Date', date: '10/11/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Shared State', type: 'Lecture', date: '3/7/2024', isDivider: false, isDescription: false },
  { position: 1, name: '(Tentative) Release HW12: TBD', type: 'Homework', date: '3/7/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW10', type: 'Due Date', date: '10/11/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Group Assignments Due', type: 'Due Date', date: '3/8/2024', isDivider: false, isDescription: true },
  { position: 1, name: 'Drop Deadline', type: 'Due Date', date: '3/8/2024', isDivider: false, isDescription: true },

  { position: 1, name: 'Spring Break', type: '', date: '', isDivider: true, isDescription: true },

  { position: 1, name: 'Week 9', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Final Project Formal Intro', type: 'Lecture', date: '3/12/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW11', type: 'Due Date', date: '10/16/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Rust Project File Structure', type: 'Special Topic Lecture', date: '3/14/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Due: MP3', type: 'Due Date', date: '3/15/2024', isDivider: false, isDescription: false },
  // { position: 1, name: 'Due: HW12', type: 'Due Date', date: '10/18/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 10', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Debugging', type: 'Special Topic Lecture', date: '3/19/2024', isDivider: false, isDescription: false },
  { position: 1, name: 'Plan Checkpoint 1 (your CA will contact you)', type: 'Final Project', date: '3/22/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 11', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Complete Checkpoint 1', type: 'Final Project', date: '', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 12', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Plan Checkpoint 2 (your CA will contact you)', type: 'Final Project', date: '4/5/2024', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 13', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Complete Checkpoint 2', type: 'Final Project', date: '', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 14', type: '', date: '', isDivider: true, isDescription: false },
  // { position: 1, name: 'Fall Break!', type: '', date: '', isDivider: false, isDescription: true },

  { position: 1, name: 'Week 15', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Final Project Due', type: 'Final Project', date: '5/1/2024', isDivider: false, isDescription: false },

  // { position: 1, name: 'Week 16', type: '', date: '', isDivider: true, isDescription: false },
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

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
  { position: 1, name: 'Course Registration and Onboarding', type: '', date: '', isDivider: false, isDescription: true },

  { position: 1, name: 'Week 2', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Course Registration and Onboarding', type: '', date: '', isDivider: false, isDescription: true },
  { position: 1, name: 'HW0: Intro Homework released', type: 'Homework', date: '08/31/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 3', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Add/Drop Deadline', type: 'Due Date', date: '09/08/2026', isDivider: false, isDescription: true },
  { position: 1, name: 'Lecture 1 - What is Rust? & Rust setup', type: 'Lecture', date: '09/08/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW1: Variable Types and Control Flow released', type: 'Homework', date: '09/08/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 2 - Rust Basics', type: 'Lecture', date: '09/10/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 4', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 3 - Compound Data Types', type: 'Lecture', date: '09/15/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW2: Enums and Results released', type: 'Homework', date: '09/15/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'MP0: Calculator released', type: 'MP', date: '09/15/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 4 - Enums and Matching', type: 'Lecture', date: '09/17/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 5', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 5 - Ownership & Scope', type: 'Lecture', date: '09/22/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW3: Introduction to Scope and Ownership released', type: 'Homework', date: '09/22/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 6 - References & Borrowing', type: 'Lecture', date: '09/24/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW4: Ownership released', type: 'Homework', date: '09/24/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 6', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 7 - Slices', type: 'Lecture', date: '09/29/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW5: More Ownership released', type: 'Homework', date: '09/29/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'MP1: K-Nearest Neighbors released', type: 'MP', date: '09/29/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 8 - Structs I (Defining and Instantiation)', type: 'Lecture', date: '10/01/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW6: Structs released', type: 'Homework', date: '10/01/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 7', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 9 - Structs II (Method syntax, examples)', type: 'Lecture', date: '10/06/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW7: Impl with Structs released', type: 'Homework', date: '10/06/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'MP2: Hangman released', type: 'MP', date: '10/06/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 10 - Generics', type: 'Lecture', date: '10/08/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW8: Generics released', type: 'Homework', date: '10/08/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 8', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 11 - Traits', type: 'Lecture', date: '10/13/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW9: Traits released', type: 'Homework', date: '10/13/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Start Forming Final Project Groups', type: 'Project', date: '10/13/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 12 - Pointers (supplemental)', type: 'Lecture', date: '10/15/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW10: Data Structures released', type: 'Homework', date: '10/15/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Deadline to drop class without W', type: 'Due Date', date: '10/15/2026', isDivider: false, isDescription: true },

  { position: 1, name: 'Week 9', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Lecture 13 - Data Structures', type: 'Lecture', date: '10/20/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'HW11: Monte Carlo with the rand crate released', type: 'Homework', date: '10/20/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'MP3: Segment Tree released', type: 'MP', date: '10/20/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Lecture 14 - Cargo, Libraries, and the Rand Crate', type: 'Lecture', date: '10/22/2026', isDivider: false, isDescription: false },
  { position: 1, name: 'Project Group Formations Due', type: 'Due Date', date: '10/22/2026', isDivider: false, isDescription: true },
  { position: 1, name: 'Special topic lectures released', type: 'Announcement', date: '10/22/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 10', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Project Proposal Due', type: 'Due Date', date: '10/29/2026', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 11', type: '', date: '', isDivider: true, isDescription: false },

  { position: 1, name: 'Week 12', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Checkpoint 1 Meetings', type: 'Final Project', date: 'Whole week', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 13', type: '', date: '', isDivider: true, isDescription: false },

  { position: 1, name: 'Fall Break', type: '', date: '11/23/2026', isDivider: true, isDescription: true },

  { position: 1, name: 'Week 15', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Checkpoint 2 Meetings', type: 'Final Project', date: 'Whole week', isDivider: false, isDescription: false },

  { position: 1, name: 'Week 16', type: '', date: '', isDivider: true, isDescription: false },
  { position: 1, name: 'Grading', type: 'Final Project', date: '', isDivider: false, isDescription: false },
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

import { Component } from '@angular/core';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface ScheduleNode{
  name: string;
  type?: string;
  date?: string;
  children?: ScheduleNode[];
}

const SCHEDULE_DATA_FOR_TREE: ScheduleNode[] = [
  {
    name: 'Week 1',
    children: [
      {name: 'Info Video', type: 'Lecture', date: '1/18/2022'}
    ],
  },
  {
    name: 'Week 2',
    children: [
      {name: 'Rust Setup', type: 'Lecture', date: '1/25/2022'},
      {name: 'Rust Basics Part 1 - Variables, Control Flow', type: 'Lecture', date: '1/27/2022'},
      {name: 'Optional Rust Practice', type: 'HW', date: '1/27/2022'}
    ],
  },
  {
    name: 'Week 3',
    children: [
      {name: 'Rust Basics Part 2 - Functions, Compound Data Types', type: 'Lecture', date: '2/1/2022'},
      {name: 'Rust Basics Part 3 - Enums, Matching', type: 'Lecture', date: '2/2/2022'},
      {name: 'MP 0 Released', type: 'HW', date: '2/3/2022'},
      {name: 'Homework 1 (Functions, Control Flow, Matching) Released', type: 'HW', date: '2/1/2022'},
      {name: 'Homework 2 (Some/None, Result, Enums) Released', type: 'HW', date: '2/3/2022'}
    ],
  },
  {
    name: 'Week 4',
    children: [
      {name: 'Rust Basics Part 4 - Examples, Ownership', type: 'Lecture', date: '2/8/2022'},
      {name: 'Ownership in Rust - Ownership, Borrowing', type: 'Lecture', date: '2/10/2022'},
      {name: 'MP 1 Released', type: 'HW', date: '2/10/2022'},
      {name: 'MP 0 Due!', type: 'HW', date: '2/11/2022'},
      {name: 'Homework 1 Due!', type: 'HW', date: '2/8/2022'},
      {name: 'Homework 3 (More Rust practice, very basic ownership ownership) Released', type: 'HW', date: '2/8/2022'},
      {name: 'Homework 2 Due!', type: 'HW', date: '2/10/2022'},
      {name: 'Homework 4 (Basic Ownership, basic transferring/borrowing) Released', type: 'HW', date: '2/10/2022'}
    ],
  },
];

// export interface ScheduleElemForTable {
//   position: number;
//   name: string;
//   type: string;
//   date: string;
//   isDivider: boolean
// }
// export interface WeekDivider{
//   // position: number;
//   isGroupBy: boolean;
//   weekNumber: number;
// }

// const SCHEDULE_DATA_FOR_TABLE: (ScheduleElemForTable )[] = [ // | WeekDivider
//   // {isGroupBy: true, weekNumber: 1},
//   {position: 1, name:'Week 1', type:'', date: '', isDivider: true},
//   {position: 1, name: 'Info Video', type:'Lecture', date: '1/18/2022', isDivider: false},

//   // {isGroupBy: true, weekNumber: 2},
//   {position: 1, name:'Week 2', type:'', date: '', isDivider: true},
//   {position: 1, name: 'Rust Setup', type:'Lecture', date: '1/25/2022', isDivider: false},
//   {position: 1, name: 'Rust Basics Part 1 - Variables, Control Flow', type:'Lecture', date: '1/27/2022', isDivider: false},
//   {position: 1, name: 'Optional Rust Practice', type:'Homework', date: '1/27/2022', isDivider: false},

//   // {isGroupBy: true, weekNumber: 3},
//   {position: 1, name:'Week 3', type:'', date: '', isDivider: true},
//   {position: 1, name: 'Rust Basics Part 2 - Functions, Compound Data Types', type:'Lecture', date: '2/1/2022', isDivider: false},
//   {position: 1, name: 'Rust Basics Part 3 - Enums, Matching', type:'Lecture', date: '2/3/2022', isDivider: false},

//   {position: 1, name: 'Release MP0', type:'MP', date: '2/3/2022', isDivider: false},

//   {position: 1, name: 'Release Homework 1 (Functions, Control Flow, Matching)', type:'Homework', date: '2/1/2022', isDivider: false},
//   {position: 1, name: 'Release Homework 2 (Some/None, Result, Enums)', type:'Homework', date: '2/3/2022', isDivider: false},


//   // {isGroupBy: true, weekNumber: 4},
//   {position: 1, name:'Week 4', type:'', date: '', isDivider: true},
//   {position: 1, name: 'Rust Basics Part 4 - Examples, Ownership', type:'Lecture', date: '2/8/2022', isDivider: false},
//   {position: 1, name: 'Ownership in Rust - Ownership, Borrowing', type:'Lecture', date: '2/10/2022', isDivider: false},

//   {position: 1, name: 'Release MP1', type:'MP', date: '2/10/2022', isDivider: false},
//   {position: 1, name: 'Due: MP0', type:'MP', date: '2/11/2022', isDivider: false},

//   {position: 1, name: 'Due: Homework 1', type:'Homework', date: '2/8/2022', isDivider: false},
//   {position: 1, name: 'Release Homework 4 (Basic Ownership, basic transferring/borrowing)', type:'Homework', date: '2/10/2022', isDivider: false},
//   {position: 1, name: 'Due: Homework 2', type:'Homework', date: '2/8/2022', isDivider: false},
//   {position: 1, name: 'Release Homework 4 (Basic Ownership, basic transferring/borrowing)', type:'Homework', date: '2/10/2022', isDivider: false},

//   // {isGroupBy: true, weekNumber: 5},
//   // {isGroupBy: true, weekNumber: 6},
//   // {isGroupBy: true, weekNumber: 7},
//   // {isGroupBy: true, weekNumber: 8},
//   // {isGroupBy: true, weekNumber: 9},
//   // {isGroupBy: true, weekNumber: 10},

// ];


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent{

  treeControl = new NestedTreeControl<ScheduleNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ScheduleNode>();

  constructor() {
    this.dataSource.data = SCHEDULE_DATA_FOR_TREE;
  }

  hasChild = (_: number, node: ScheduleNode) => !!node.children && node.children.length > 0;

  // displayedColumns: string[] = ['name', 'type', 'date'];

  // isGroup(item): boolean{
  //   return item.isGroupBy;
  // }
}

import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Inject,
	Component,
	ViewEncapsulation
} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Chores} from '../../services';
import {TodoListItem} from '../todo_list_item/todo_list_item';

@Component({
	moduleId: module.id, // CommonJS standard
	selector: 'todo-list',
	encapsulation: ViewEncapsulation.Emulated, // ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None (default)
	changeDetection: ChangeDetectionStrategy.Detached,
	templateUrl: './todo_list.html',
	styleUrls: [
		'./todo_list.css'
	],
	directives: [
		CORE_DIRECTIVES,
		TodoListItem
	]
})

export class TodoList {
	chores: Chores;
	constructor(@Inject(Chores) csp: Promise<Chores>, cdRef: ChangeDetectorRef) {
		csp.then((cs) => {
			this.chores = cs;
			cdRef.reattach();
		});
	}
}
import {
    creatTodoActions,
    getTasks,
    getTCompletedTasks,
    getDeletedTasks,
    getExpiredTasks
} from './tododucks';
import { createtodoReducer} from './tododucks';

const initState = {
    tasks:[],
    completed:[],
    expired:[],
    deleted:[]
};



describe('Reducer', () => {
   
    it('resetTodo', () => {
        const reducer = createtodoReducer(initState , creatTodoActions.resetTodo());

        expect(reducer).toEqual(initState);
    });
    it('addTodo', () => {
        const reducer = createtodoReducer(initState , creatTodoActions.addTodo([{title:"eating"}]));

        expect(reducer.tasks).toEqual([{title:"eating"}]);
    });
    it('taskComplete', () => {
        const reducer = createtodoReducer(initState , creatTodoActions.taskComplete([{title:"eating"}],[{title:"sleeping"}]));

        expect(reducer.tasks).toEqual([{title:"eating"}]);
        expect(reducer.completed).toEqual([{title:"sleeping"}]);
    });
    it('taskDeleted', () => {
        const reducer = createtodoReducer(initState , creatTodoActions.taskDeleted([{title:"eating"}],[{title:"sleeping"}]));

        expect(reducer.tasks).toEqual([{title:"eating"}]);
        expect(reducer.deleted).toEqual([{title:"sleeping"}]);
    });
    it('taskExpired', () => {
        const reducer = createtodoReducer(initState , creatTodoActions.taskExpired([{title:"eating"}],[{title:"sleeping"}]));

        expect(reducer.tasks).toEqual([{title:"eating"}]);
        expect(reducer.expired).toEqual([{title:"sleeping"}]);
    });

    
});

 describe('State', () => {
    it('getTasks', () => {
        const state = { createtodoReducer: {tasks:[]} };
        const res = getTasks(state);

        expect(res).toEqual(state.createtodoReducer.tasks);
    });
    it('getTCompletedTasks', () => {
        const state = { createtodoReducer: {completed:[]} };
        const res = getTCompletedTasks(state);

        expect(res).toEqual(state.createtodoReducer.completed);
    });
    it('getDeletedTasks', () => {
        const state = { createtodoReducer: {deleted:[]} };
        const res = getDeletedTasks(state);

        expect(res).toEqual(state.createtodoReducer.deleted);
    });
    it('getExpiredTasks', () => {
        const state = { createtodoReducer: {deleted:[]} };
        const res = getExpiredTasks(state);

        expect(res).toEqual(state.createtodoReducer.expired);
    });


 });

 describe('Actions Creator', () => {
    it('addTodo', () => {
        const expectedAction = {
            type: 'CREATE_TODO//POST_NEW_TODO',
            payload: {task:[]}
        };
        const action = creatTodoActions.addTodo([]);

        expect(action).toEqual(expectedAction);
    });
    it('resetTodo', () => {
        const expectedAction = {
            type: 'CREATE_TODO//RESET_TODO'
           
        };
        const action = creatTodoActions.resetTodo();

        expect(action).toEqual(expectedAction);
    });
    it('taskComplete', () => {
        const expectedAction = {
            type: 'CREATE_TODO//POST_TODO_COMPLETED',
            payload: {tasks:[],completed:[]}
        };
        const action = creatTodoActions.taskComplete([],[]);

        expect(action).toEqual(expectedAction);
    });
    it('taskExpired', () => {
        const expectedAction = {
            type: 'CREATE_TODO//POST_TODO_EXPIRED',
            payload: {tasks:[],expired:[]}
        };
        const action = creatTodoActions.taskExpired([],[]);

        expect(action).toEqual(expectedAction);
    });
    it('taskDeleted', () => {
        const expectedAction = {
            type: 'CREATE_TODO//POST_TODO_DELETED',
            payload: {tasks:[],deleted:[]}
        };
        const action = creatTodoActions.taskDeleted([],[]);

        expect(action).toEqual(expectedAction);
    });


 });

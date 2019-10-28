import {handlersDefaultCase} from './helpers';

const PREFIX = 'CREATE_TODO';
const RESET_TODO = `${PREFIX}//RESET_TODO`;
const POST_NEW_TODO = `${PREFIX}//POST_NEW_TODO`;
const POST_TODO_COMPLETED = `${PREFIX}//POST_TODO_COMPLETED`;
const POST_TODO_EXPIRED = `${PREFIX}//POST_TODO_EXPIRED`;
const POST_TODO_DELETED= `${PREFIX}//POST_TODO_DELETED`;

const initState = {
    tasks:[],
    completed:[],
    expired:[],
    deleted:[]

};

export const createtodoReducer = (state = initState, action = {}) => {
    const handlers = {
        [RESET_TODO]: () => ({ ...initState}),
        [POST_NEW_TODO]: () => ({ ...state, tasks: action.payload.task }),
        [POST_TODO_COMPLETED]: () => ({ ...state, completed: action.payload.completed,tasks: action.payload.tasks }),
        [POST_TODO_EXPIRED]: () => ({ ...initState,tasks: action.payload.tasks ,expired:action.payload.expired}),
        [POST_TODO_DELETED]: () => ({ ...initState,tasks: action.payload.tasks ,deleted:action.payload.deleted}),
       
    };
    return handlersDefaultCase(handlers, action, state);
   
};


const addTodo = (task) => ({ type: POST_NEW_TODO ,payload: { task }});
const resetTodo = () => ({ type: RESET_TODO });
const taskComplete = (task,complatedtask) => ({ type: POST_TODO_COMPLETED ,payload: { tasks: task,completed:complatedtask}});
const taskExpired = (task,expiredtask) => ({ type: POST_TODO_EXPIRED ,payload: { tasks: task,expired:expiredtask}});
const taskDeleted = (task,deletedtask) => ({ type: POST_TODO_DELETED ,payload: { tasks: task,deleted:deletedtask}});


export const getTasks = state => state.createtodoReducer.tasks;
export const getTCompletedTasks = state => state.createtodoReducer.completed;
export const getDeletedTasks = state => state.createtodoReducer.deleted;
export const getExpiredTasks = state => state.createtodoReducer.expired;

export const creatTodoActions = {
    addTodo,
    resetTodo,
    taskComplete,
    taskExpired,
    taskDeleted
};

export default createtodoReducer;
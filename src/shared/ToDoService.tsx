import { db } from '../config';

class ToDo {
    id: string = "";
    name: string = "";
    done: boolean = false;
    constructor(name: string, done: boolean) {
        this.name = name;
        this.done = done;
    }
}
class ToDoService {
    /**
     * @api
     * @param toDo
     */
    static save(toDo: ToDo):Promise<any> {
        return db.ref("/chores").push(toDo);
    }
    /**
     * @api
     * */    
    static getList = new Promise<Array<ToDo>>((resolve, reject) => {
        db.ref('/chores').on('value', snapshot => {
            let toDoArray = Array<ToDo>();
            snapshot.forEach((toDo) => {
                if(toDo.key !== null) {
                    toDoArray.push({id: toDo.key, name: toDo.val().name, done: toDo.val().done})
                }
            });
            resolve(toDoArray);
        });
    });
    /**
     * @api
     * @param string toDoId 
     */
    static delete(toDoId: string): Promise<any> { 
        const toDoRef = db.ref('/chores').child(toDoId);
        return toDoRef.remove();
    }
    /**
     * @api
     * @param ToDo 
     */
    static update(ToDo: ToDo): Promise<any> {
        const toDoRef = db.ref('/chores').child(ToDo.id);
        return toDoRef.update(ToDo);
    }
}
export {
    ToDo,
    ToDoService
}
import { db } from '../config';

class ToDo {
    id: string = "";
    name: string = "";
}
class ToDoService {
    /**
     * @api
     * */    
    static getList = new Promise<Array<ToDo>>((resolve, reject) => {
        db.ref('/chores').on('value', snapshot => {
            let toDoArray = Array<ToDo>();
            snapshot.forEach((toDo) => {
                if(toDo.key !== null) {
                    toDoArray.push({id: toDo.key, name: toDo.val().name})
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
}
export {
    ToDo,
    ToDoService
}
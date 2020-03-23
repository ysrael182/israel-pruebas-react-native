import { db } from '../config';

class ToDo {
    id: string|null = "";
    name: string = "";
}
class ToDoService {

    static async getToDoList(): Promise<Array<ToDo>> {
        let toDoArray = Array<ToDo>();
        db.ref('/chores').on('value', snapshot => {
            console.log(snapshot);
            snapshot.forEach((toDo) => {
                 toDoArray.push({id: toDo.key, name: toDo.val().name})
            });
         });
         console.log(toDoArray);
        return toDoArray; 
    }
}
export {
    ToDo,
    ToDoService
}
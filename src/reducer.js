const initialState = {
    SavedTasks:[{ Description:"do the project of the course", Status: "Complete" }
               ],
    LastId:0
}

export default function reducer(state=initialState, action){
    let newState ={...state}; 
    switch(action.type){
        case "ADD":
                    const DescriptionContent = action.payload;
                    const newId = state.LastId +1;
                    const Statusv = "Not Complete";
                    newState.SavedTasks.push({Description: DescriptionContent, Status:Statusv});
                    newState.LastId = newId;
                    break;
        case "REMOVE":newState.SavedTasks.splice(action.payload, 1);
                    break;
        case "EDIT":
                    let id = action.payload[0];
                    let newStatus = action.payload[1];
                    console.log("this is new status");
                    console.log(newStatus);
                    newState.SavedTasks[id].Status = newStatus;
                    break;
    }
    console.log("this is the new state in reducer");
    console.log(newState);
    return newState;
}
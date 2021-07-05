const taskContainer=document.querySelector(".task_container");

const generateCard=(task)=>
    `<div class="col-md-6 col-lg-4 mb-3" id=${task.id}>
    <div class="card " style="height: 400px;">
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="card__img p-2"  >
            <img style="height: 200px;" src=${task.image} class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title"> ${task.title}</h5>
          <p class="card-text">${task.description}</p>
          <a href="#" class="btn btn-primary">${task.taskType}</a>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
        </div>
     </div>
    </div>`;
const saveChanges=()=>
{
    const details={
        id:`${Date.now()}`,
        image:document.getElementById("Url").value,
        title:document.getElementById("Tasktitle").value,
        taskType:document.getElementById("Tasktype").value,
        description:document.getElementById("description").value
    }
    taskContainer.insertAdjacentHTML("beforeend",generateCard(details));
}
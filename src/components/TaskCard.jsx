import React from "react";

function TaskCard({invitado}) {
  return (
    <div>
      <h3>{invitado.name}  {invitado.phone}  {invitado.email}</h3>
    </div>
  );
}
export default TaskCard

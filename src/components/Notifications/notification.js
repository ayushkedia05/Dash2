import React from "react";
// import { Notification } from "tabler-icons-react";   
import { Notification } from "@mantine/core";
import './notification.css'
const Notifi=()=>{
return(
    <div>
    <Notification className="notify" title="Default notification">
    This is default notification with title and body
  </Notification>

<Notification className="notify" title="Default notification">
This is default notification with title and body
</Notification>

<Notification className="notify" title="Default notification">
This is default notification with title and body
</Notification>
</div>
)
};
export default Notifi

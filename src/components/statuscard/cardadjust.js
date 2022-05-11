import React from "react";
import Statuscard from "./ststuscard";
import { Bug ,BugOff,User} from 'tabler-icons-react';
// import Sta




const StatusAdjust=()=>{







return(
    <div className="aa">
    <Statuscard
    icon={Bug}
    count={546}
    title='Total threat Found'
    colour='red'
    >

    </Statuscard>

    <Statuscard
    icon={User}
    count={4}
    title='Device Connected'
    colour='blue'

    >

    </Statuscard>

    <Statuscard
    icon={BugOff}
    count={300}
    title=' Total threat removed'
    colour='green'

    >

    </Statuscard>
    

    </div>
)
}

export default StatusAdjust;
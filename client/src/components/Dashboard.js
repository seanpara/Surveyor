import React from 'react'
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return(
    <div>
    Dashboard
      <div className="fixed-action-button" style={{margin: '60% 0% 0% 80%'}}>
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i class="material-icons">add</i>
        </Link>
      </div>
    </div>
    )
}
export default Dashboard

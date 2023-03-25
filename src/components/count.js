import React from "react";
import '../styles/count.css';

function Count ({ nClic }) {
  return (
    <div className="count">
      {nClic}
    </div>
  )
}

export default Count;
import React, { useEffect } from 'react'

function MaintainCategories() {

useEffect(() => {
  fetch("https://superpawntechshop-default-rtdb.europe-west1.firebasedatabase.app/categories.json")
  .then(res => res.json())
  .then(json => )
}, []);

  return (
    <div>MaintainCategories</div>
  )
}

export default MaintainCategories
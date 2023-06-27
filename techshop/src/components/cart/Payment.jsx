import React from 'react'

const pay = () => {
    const url = "???"
    const data = {}
    const headers = {}

    fetch(url, {"method": "POST", "body": JSON.stringify(data), "headers": headers})
    .then(res => res.json())
    .then(json => console.log(json));   // window.location.href = json.payment_link
}

function Payment() {
  return (
    <button onClick={pay}>Maksa</button>
  )
}

export default Payment
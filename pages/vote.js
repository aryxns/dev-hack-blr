import React from "react"

export default function Vote() {

  const voteOptions = [{
    name: "Hello World",
    count: 13
  }, {
    name: "Bruh",
    count: 40
  }]
  
  return(
    <div class="text-white w-full content-center m-20">
      {voteOptions.map((voteOp) => (
      <div class="flex justify-between mb-5 w-1/2 bg-blue-100 p-3 text-black rounded-xl">
        <div class="">
          <h1 class="p-1">{voteOp.name}</h1>
        </div>
        <div class="flex justify-end w-1/5 rounded-full">
          <button class="bg-blue-600 w-16 text-white p-1 text-white rounded-lg">Vote</button>
          <h1 class="bg-blue-200 ml-3 w-8 rounded-full p-1">{voteOp.count}</h1>
        </div>
      </div>
      ))}
    </div>
  )
}
import React from "react"

export default function AddPrompt() {
  return(
    <div class="text-white w-full content-center m-20">
      <h1>Add your prompt</h1>
    <input class="w-1/2 h-12 mt-5 bg-gray-900 rounded-xl text-white p-3" label="Add your prompt"/>
      <br/>
      <button class="mt-5 bg-blue-600 rounded-xl h-12 p-3 w-30">Submit</button>
    </div>
  )
}
import React, { useState } from "react";

function PlaceInstructionForm({
  register,
  errors,
  fields,
  append,
  remove,
  name,
}) {
  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          append({ rules: "Example Rule 1" });
        }}
        className="w-[25%] aspect-btn bg-secondry50"
      >
        {" "}
        Add New Rule
      </button>
      {fields?.map((field, i) => {
        return (
          <div className="flex justify-between h-[6vh] w-full" id={field.id}>
            <input
              {...register(`${name}.${i}`)}
              className="h-full aspect-textField border border-primary40"
              id={field.id}
            ></input>
            <button
              onClick={() => {
                remove(i);
              }}
              className="w-8 aspect-square bg-red-500"
            >
              Delete
            </button>
          </div>
        );
      })}
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="w-[26%] bg-secondry80 text-secondry10 font-bold  aspect-btn border border-primary40 rounded-lg"
        >
          save
        </button>
      </div>
    </div>
  );
}

export default PlaceInstructionForm;

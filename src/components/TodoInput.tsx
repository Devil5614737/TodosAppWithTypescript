import React, { useState } from "react";

interface TodoInputPropsI {
  handleAddTodo: (text: string) => void;
}

export const TodoInput = ({ handleAddTodo }: TodoInputPropsI): JSX.Element => {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <input
        value={text}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setText(e.currentTarget.value)
        }
        className="bg-[white] w-full  shadow-lg h-[4.7rem] rounded-md text-2xl p-2 "
        placeholder="write a todo..."
      />
      <button
        onClick={() => {handleAddTodo(text)
        setText("")
        }}
        className="my-5 text-[1.6rem] font-[500] bg-[#6366F1] text-[white] justify-center flex p-5 rounded-md cursor-pointer md:h-[4.7rem] md:w-[16rem] md:ml-5 "
      >
        Add Todo
      </button>
    </div>
  );
};

"use client";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

export default function PythonEditor({code , setCode}) {
  return (
    <CodeMirror
      placeholder="Let's turn your ideas into code! 💡🧠"
      className="border-[#F18DF2] border-4 w-[95%] lg:w-[80%] mx-auto rounded-2xl overflow-hidden my-2 text-white"
      value={code}
      theme={oneDark}
      height="400px"
      extensions={[python()]}
      onChange={(value) => setCode(value)}
    />
  );
}

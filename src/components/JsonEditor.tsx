import React, { useEffect } from "react";
import { getVariablesFromJson } from "../utils";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

const myTheme = EditorView.theme({
  "&": {
    fontSize: ".8rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  },
  "&.cm-editor.cm-focused": {
    outline: "none",
  },
});

interface JsonEditorProps {
  inputText: string;
}

const JsonEditor = ({ inputText = "" }: JsonEditorProps) => {
  const [value, setValue] = React.useState("{}");
  const onChange = React.useCallback((val: string) => {
    try {
      JSON.parse(val);
      setValue(val);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (!inputText) return;
    function processJson(jsonString: string) {
      const { variables, variablesArray } = getVariablesFromJson(inputText);
      const jsonObj = JSON.parse(jsonString);
      for (const key of variablesArray) {
        if (jsonObj[key]) {
          variables[key] = jsonObj[key];
        }
      }
      return JSON.stringify(variables, null, 2);
    }
    setValue((prevVar) => processJson(prevVar));
  }, [inputText]);

  useEffect(() => {
    console.log(JSON.parse(value));
  }, [value]);

  return (
    <div className="w-full">
      <h3>Variables</h3>
      <CodeMirror
        value={value}
        height="200px"
        extensions={[langs.json()]}
        onChange={onChange}
        theme={myTheme}
      />
    </div>
  );
};

export default JsonEditor;

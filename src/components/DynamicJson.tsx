import { useState } from "react";
import JsonEditor from "./JsonEditor";

const test = "hello {{world}} and language {{language}}";

const DynamicJson = () => {
  const [inputText, setInputText] = useState<string>(test);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="max-w-3xl bg-white mx-auto p-4 rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-bold text-gray-700">Dynamic JSON</h2>
      <div>
        <label htmlFor="json-input">JSON Input</label>
        <textarea
          className="w-full border rounded-md border-gray-300 focus:border-blue-400 focus:ring-0 text-gray-700 p-2 sm:text-sm"
          id="json-input"
          value={inputText}
          onChange={handleInputChange}
          rows={5}
          placeholder="Enter JSON"
        />
      </div>
      <div>{inputText && <JsonEditor inputText={inputText} />}</div>
    </div>
  );
};

export default DynamicJson;

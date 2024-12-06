import { useEffect, useState } from "react";
import JsonEditor from "./JsonEditor";

const DynamicJson = () => {
  const [json, setJson] = useState<string>();

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  };

  useEffect(() => {
    if (!json) return;
    console.log(json);
  }, [json]);
  return (
    <div className="max-w-3xl bg-white mx-auto p-4 rounded-lg shadow">
      <h2>Dynamic JSON</h2>
      <div>
        <label htmlFor="json-input">JSON Input</label>
        <textarea
          className="w-full border rounded-md border-gray-300 focus:border-blue-400 focus:ring-0 text-gray-700 p-2 sm:text-sm"
          id="json-input"
          value={json}
          onChange={handleJsonChange}
          rows={5}
          placeholder="Enter JSON"
        />
      </div>
      <div>
        <JsonEditor />
      </div>
    </div>
  );
};

export default DynamicJson;


export const getVariablesFromJson = (text: string = "") => {
  const regex = /{{(\w+)}}/g;
  let match = regex.exec(text);

  const jsonParams: Record<string, unknown> = {};
  const variablesArray: string[] = [];
  while (match) {
    const variables = match[1];
    jsonParams[variables] = null;
    variablesArray.push(match[1]);
    match = regex.exec(text);
  }
  return { variables: jsonParams, variablesArray };
};

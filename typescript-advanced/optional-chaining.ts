// Optional chaining ?.foo?.bar?.baz

type SerializationOptions = {
    formatting: {
        "indent-level"?: number;
        indent?: number;
        getIndent?: () => number;
    }
}
  function serializeJSON(value: any, options?: SerializationOptions) {

// default
    const indent = options?.formatting?.indent;
// optional in dynamic (first bad practice, doesn't option first time)
    const indentBad = options?.formatting["indent-level"];
    const indentDynamic = options?.formatting?.["indent-level"];
// functions if can be optional
    const indentFunction = options?.formatting?.getIndent?.();
    return JSON.stringify(value, null, indent);
  }

  const user = {
      name: 'John Volos',
      twitter: 'kurabombei'
  };

  const json = serializeJSON(user, {
      formatting: {
          "indent-level": 5,
      }
  });
  console.log(json);

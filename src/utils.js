export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export const updateDraftByType = (draft, newValue) => {
  if (newValue === "boolean") {
    delete draft.options;
    delete draft.control;
    draft.defaultValue = false;
  } else if (newValue === "one of") {
    draft.defaultValue = "";
    draft.options = [];
    draft.control = "select";
  } else if (newValue === "node") {
    delete draft.options;
    draft.defaultValue = "";
    draft.control = "textarea";
  }
  draft.type = newValue;
};

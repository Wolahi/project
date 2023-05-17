import * as Yup from "yup";

const useSchemasValid = (): any => {
  const schemaEvent = Yup.object({
    name_event: Yup.string(),
    info: Yup.string(),
    addres: Yup.string(),
    data: Yup.date(),
  });

  return schemaEvent;
};

export default useSchemasValid;

import * as Yup from "yup";

const useSchemasValid = (): any => {
  const schemaEvent = Yup.object({
    name: Yup.string().required(),
    info: Yup.string().required(),
    addres: Yup.string().required(),
  });

  return schemaEvent;
};

export default useSchemasValid;

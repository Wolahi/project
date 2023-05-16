import { ReactElement } from "react";
import styles from "./ModalCreate.module.scss";
import * as yup from "yup";
import useSchemasValid from "../utils/shemasYup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputNameEvent from "./componentsForm/InputAddres";
const ModalCreate = (props: any): ReactElement => {
  const { setViewGlob } = props;
  const valid = useSchemasValid();
  type FromEventInfo = yup.InferType<typeof valid.schemaEvent>;
  const methods = useForm<FromEventInfo>({
    resolver: yupResolver(valid.schemaEvent),
  });
  const onSubmit = (data: FromEventInfo): void => console.log(data);
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <FormProvider {...methods}>
          <InputNameEvent />
        </FormProvider>
      </div>
    </div>
  );
};

export default ModalCreate;

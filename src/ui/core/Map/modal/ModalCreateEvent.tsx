import { ReactElement } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useSchemasValid from "../utils/shemasYup";
import InputNameEvent from "./componentsForm/InputNameEvent";
import styles from "./ModalCreate.module.scss";
import InputAddres from "./componentsForm/InputAddres";
import InputInfo from "./componentsForm/InputInfo";
import InputData from "./componentsForm/InputData";
import ButtonSubmit from "./componentsForm/ButtonSubmit";
import ImgInput from "./componentsForm/ImgInput";

const ModalCreate = (props: any): ReactElement => {
  const { setViewGlob } = props;
  const schemas = useSchemasValid();
  type FromEventInfo = yup.InferType<typeof schemas.schemaEvent>;
  const methods = useForm<FromEventInfo>({
    resolver: yupResolver(schemas.schemaEvent),
  });
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <div className={styles.formEvent}>
          <span className={styles.header}>Create Event</span>
          <FormProvider {...methods}>
            <form>
              <InputNameEvent />
              <InputAddres />
              <InputData />
              <InputInfo />
              <ButtonSubmit />
            </form>
          </FormProvider>
        </div>
        <div className={styles.imgFile}>
          <ImgInput />
        </div>
        <button type="button" onClick={(): void => setViewGlob(false)} className={styles.close}>
          <div className={styles.svgClose} />
        </button>
      </div>
    </div>
  );
};

export default ModalCreate;

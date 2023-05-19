import { useState } from "react";

const useImg = (): any => {
  const [img, setImg] = useState("");

  const converToBase64 = (file: any): Promise<any> => {
    return new Promise((resolve) => {
      const fileReader: any = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (): any => {
        resolve(fileReader.result);
      };
    });
  };

  const onChange = async (e: any): Promise<void> => {
    const file = e.target.files[0];
    console.log(file);
    const url = await converToBase64(file);
    setImg(url);
  };

  return {
    img,
    onChange,
  };
};

export default useImg;

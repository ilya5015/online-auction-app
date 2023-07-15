import React, { FormEventHandler, MouseEventHandler } from "react";
import style from "./PlaceBetForm.module.css";

type Props = {
  handleOnSubmit: Function;
};

const PlaceBetForm: React.FC<Props> = ({ handleOnSubmit }) => {
  return (
    <form
      id="placeBetForm"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formData = {
          betValue: form.get("betValue"),
        };

        handleOnSubmit(formData);

        (e.target as HTMLFormElement).reset();
      }}
      className={style.placeBetFormWrapper}
    >
      <input name="betValue" type="text" className={style.placeBetFormInput} />
      <button type="submit" className={style.placeBetFormSubmitBtn}>
        Place bet
      </button>
    </form>
  );
};

export default PlaceBetForm;

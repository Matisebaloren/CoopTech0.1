import React, { Children, useState } from "react";
import styles from "./input.module.css";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Margin } from "@mui/icons-material";





const Input = ({ clases = "", type = "text", placeholder = "", funcion , val=""}) => {
  console.log(funcion);
  const [value, setValue] = useState(val);
  const [showPass, setShowPass] = useState(false);
  var showType = type;
  if(showPass)showType = "text"

  function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    if (type == "email") {
      if (validarEmail(event.target.value)) {
        console.log("valido");
        event.target.style.color = "blue";
      } else {
        event.target.style.color = "red";
      }
    }
  };

  const handleKeyPress = (event) => {
    const inputValue = event.key;
    if (type === "number" && !/[0-9.]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const MostrarPass = () =>{
    setShowPass(!showPass);
  }

  return (
    <>
      <input
        value={value}
        onClick={funcion}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={"rounded-2xl p-2 my-2 w-full " + clases}
        type={showType}
        placeholder={placeholder}
      />
      {(type == "password") ? (<span onClick={MostrarPass} className={styles.btnShowPassword + " rounded-2xl"}>{(showPass) ? <VisibilityOutlinedIcon/> : <VisibilityOffOutlinedIcon/> }</span>) : ""}     
    </>
  );
};

export default Input;

import { useForm } from "react-hook-form";
import { signInThunk } from "../../store/auth/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AuthButton,
  AuthEyeBtn,
  AuthForm,
  AuthInput,
  AuthInputWrap,
  AuthLabel,
  AuthSubmitBlock,
  AuthTitle,
  ErrorSpan,
  LinkStyled,
} from "../Register/Register.Styled";
import EyeOpenSvg from "../../images/EyeOpenSvg";
import EyeCloseSvg from "../../images/EyeCloseSvg";

export const Login = ({ setmode, closeModal, modal }) => {
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function onSubmit({ email, password, name }) {
    dispatch(signInThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        toast.success("Sign in done!");
        navigate("/products");
        closeModal();
        console.log("modal:", modal);
      })
      .catch((err) => toast.error(err));
  }
  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthTitle>Log in</AuthTitle>
      <AuthInputWrap>
        <AuthLabel>
          <AuthInput
            placeholder="Mail:"
            type="text"
            {...register("email", {
              required: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Please write valid email",
              },
            })}
          />
          <ErrorSpan>{errors.email?.message}</ErrorSpan>
        </AuthLabel>
        <AuthLabel>
          <AuthInput
            placeholder="Password:"
            type={eye ? "text" : "password"}
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <ErrorSpan>{errors.password?.message}</ErrorSpan>
          <AuthEyeBtn
            type="button"
            onClick={() => setEye(!eye)}
            aria-label="show or hide password"
          >
            {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
          </AuthEyeBtn>
        </AuthLabel>
      </AuthInputWrap>
      <AuthSubmitBlock>
        <AuthButton
          name="submit"
          type="submit"
          // onClick={closeModal}
          aria-label="Log In"
        >
          Log in
        </AuthButton>
        <LinkStyled onClick={() => setmode("register")}>
          Don’t have an account?
        </LinkStyled>
      </AuthSubmitBlock>
    </AuthForm>
  );
};

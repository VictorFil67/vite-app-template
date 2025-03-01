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
} from "./Register.Styled";
import EyeOpenSvg from "../../images/EyeOpenSvg";
import EyeCloseSvg from "../../images/EyeCloseSvg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = ({ setmode }) => {
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function onSubmit({ email, password, name }) {
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        toast.success("Sign up done!");
        navigate("/login");
      })
      .catch((err) => toast.error(err));
  }
  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthTitle>Registration</AuthTitle>
      <AuthInputWrap>
        <AuthLabel>
          <AuthInput
            placeholder="Name:"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Name must not be empty",
              },
            })}
          />
          <ErrorSpan>{errors.name?.message}</ErrorSpan>
        </AuthLabel>
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
        <AuthButton name="submit" type="submit" aria-label="Log In">
          Registration
        </AuthButton>
        <LinkStyled onClick={() => setmode("login")}>
          Already have an account?
        </LinkStyled>
      </AuthSubmitBlock>
    </AuthForm>
  );
};

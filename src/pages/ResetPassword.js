import React from 'react';

import ResetPasswordForm from "../components/ResetPasswordForm";
import FormLayout from '../layouts/FormLayout';

import styles from "../styles/forms.module.scss";
const { forms } = styles;

const options = {
  title: "Reset Your Password",
}

function ResetPassword() {
  return (
    <div className={forms}>
      <ResetPasswordForm />
    </div>
  )
}

export default FormLayout(ResetPassword, options);
import React, { useState } from "react";

const RegisterForm = () => {
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(initialData);

  return <div>a</div>;
};

export default RegisterForm;

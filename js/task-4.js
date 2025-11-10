const form = document.querySelector("form.login-form");

const eventFunction = (event) => {
  event.preventDefault();
  const formData = {
    useremail: form.elements.email.value.trim(),
    userpassword: form.elements.password.value.trim(),
  };

  const formDataValue = Object.values(formData);

  if (formDataValue.includes("")) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);

  form.reset();
};

form.addEventListener("submit", eventFunction);

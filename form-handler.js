const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your message!"))
      .catch((error) => alert('Something went wrong while trying to submit your message!') && console.log(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  
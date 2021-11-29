function procesaFormularioRegistro(event) {
    try {
      event.preventDefault();
      const name = document.querySelector("#username");
      const email = document.querySelector("#useremail");
      const password = document.querySelector("#password");
      const passwordrepeat = document.querySelector("#passwordrepeat");
      const nameValue = name.value.toLowerCase().trim();
      const emailValue = email.value.toLowerCase().trim();
      const passwordValue = password.value.trim();
      const passwordValue2 = passwordrepeat.value.trim();
      const emailExpression = /\S+@\S+\.\S+/; //forma corta de definir una expresión regular
      const isEmailFormated = emailExpression.test(emailValue);
      if(!(passwordValue == passwordValue2)){
        alert("Las contraseñas no coinciden")
      }else if (emailValue != "" && isEmailFormated) {
        if (passwordValue != "" && nameValue != "") {
          sendDataAsync();
          console.log(`hola`);
        } else {
          alert(`password no valido`);
        }
      } else {
        alert(`el email no es válido`);
      }
  
    } catch (error) {
      alert(`error`, error);
    }
  }

  function sendDataAsync() {
    try {
        let myData={
            name:$("#username").val(),
            email:$("#useremail").val(),
            password:$("#password").val(),
        };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend)
        $.ajax({
            url:"http://localhost:8080/api/user/new",
            type:"POST",
            data:JSON.stringify(myData),
            datatype:"JSON",
            contentType:'application/json;charset=UTF-8',
            success:function(respuesta){
                alert("se ha guardado el dato" + respuesta)
                window.location.href = "login.html"
            }
        });
    } catch (error) {
      console.log(`error`, error);
    }
  }
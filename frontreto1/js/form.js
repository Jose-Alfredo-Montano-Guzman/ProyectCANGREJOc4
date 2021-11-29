function procesaFormulario(event) {
    try {
      event.preventDefault();
      const email = document.querySelector("#user-email");
      const password = document.querySelector("#user-password");
      const emailValue = email.value.toLowerCase().trim();
      const passwordValue = password.value.trim();
      const emailExpression = /\S+@\S+\.\S+/; //forma corta de definir una expresión regular
      const isEmailFormated = emailExpression.test(emailValue);
      if (emailValue != "" && isEmailFormated) {
        console.log(`email valido`);
        if (passwordValue != "") {
          alert(`password valido`);
          traerInformacion();
        } else {
          alert(`password no valido`);
        }
      } else {
        alert(`el email no es válido`);
      }
  
    } catch (error) {
      console.log(`error`, error);
    }
  }

  function traerInformacion(){
    const email = document.querySelector("#user-email");
    const emailValue = email.value.toLowerCase().trim();
    const emailExpression = /\S+@\S+\.\S+/; //forma corta de definir una expresión regular
    const isEmailFormated = emailExpression.test(emailValue);
    $.ajax({
        url:"http://localhost:8080/api/user/all",
        type: "GET", /* or type:"GET" or type:"PUT" */
        datatype:"JSON",
        data: {
        },
        success:function(respuesta){
            console.log(respuesta);
            for(k in respuesta) {
                if(respuesta[k].email == emailValue){
                    alert(`Bienvenido ${respuesta[k].name}`)
                    break
                }
            }
        },
        error: function () {
            console.log("error");
        }
    });
}

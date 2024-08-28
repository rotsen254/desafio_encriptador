document
.getElementById("encriptar")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    var userinput = document.getElementById("input").value;
    var savedData = []; // Array para guardar la versión encriptada
    var originalData = userinput;  // Guardar la versión original

    for (let i = 0; i < userinput.length; i++) {
      switch (userinput[i]) {
        case "a":
          savedData.push("ai");
          break;
        case "e":
          savedData.push("enter");
          break;
        case "i":
          savedData.push("imes");
          break;
        case "o":
          savedData.push("ober");
          break;
        case "u":
          savedData.push("ufat");
          break;
        default:
          savedData.push(userinput[i]); // Conservar caracteres no encriptados
          break;
      }
    }
    var encryptedData = savedData.join(""); // Unir el array en una cadena

    if(originalData === ""){ 
        document.getElementById("mensaje").classList.remove("hidden"),
        document.getElementById("resultado").classList.add("hidden");
    }else{ 
        document.getElementById("mensaje").classList.add("hidden"),
        document.getElementById("resultado").classList.remove("hidden"),
        document.getElementById("resuelto").innerText = encryptedData;
        
    }

    document.getElementById('Copia').addEventListener('click', function(event) {
      event.preventDefault();
  
    
      document.getElementById("input").value = encryptedData;
  });
    
  });

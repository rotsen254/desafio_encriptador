
document.getElementById('Desencriptar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    var userinput = document.getElementById('input').value;
    var savedData = [];  // Array para guardar la versión encriptada
    var originalData = userinput;  // Guardar la versión original

    for (let i = 0; i < userinput.length; i++) {
        if(userinput[i] == "a" && userinput[i+1] == "i"){
            savedData.splice(i, 2);
            savedData.push('a');
            i++;
        }else if(userinput[i] == "e" && userinput[i+1] == "n" && userinput[i+2] == "t" && userinput[i+3] == "e" && userinput[i+4] == "r"){
            savedData.splice(i, 5);
            savedData.push('e');
            i+= 4;
        }else if(userinput[i] == "i" && userinput[i+1] == "m" && userinput[i+2] == "e" && userinput[i+3] == "s"){
            savedData.splice(i+1, 1);
            savedData.push('i');
            i+= 3;
        }else if(userinput[i] == "o" && userinput[i+1] == "b" && userinput[i+2] == "e" && userinput[i+3] == "r"){
            savedData.splice(i, 4);
            savedData.push('o');
            i+= 3;
        }else if(userinput[i] == "u" && userinput[i+1] == "f" && userinput[i+2] == "a" && userinput[i+3] == "t"){
            savedData.splice(i, 4);
            savedData.push('u');
            i+= 3;
        }else {
            savedData.push(userinput[i]);  // Si no hay coincidencia, guarda el carácter original
        }

        
    }

    var decryptedData = savedData.join('');  // Unir el array en una cadena
    if(originalData == ""){ 
        (document.getElementById("mensaje").classList.remove("hidden"),
        document.getElementById("resultado").classList.add("hidden"))
    }else{ (document.getElementById("mensaje").classList.add("hidden"),
        document.getElementById("resultado").classList.remove("hidden"),
        document.getElementById("resuelto").innerText = decryptedData);
    }    

    document.getElementById('Copia').addEventListener('click', function(event) {
        event.preventDefault();
    
      
        document.getElementById("input").value = decryptedData;
    });
      
});


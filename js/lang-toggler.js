function isChecked() {
    console.log("Checked!");
    
    if(document.getElementById("my-checkbox").checked){
        document.getElementById("message").location.href="index2.html";
    }
    else{
        document.getElementById("message").textContent = "Home";
    }
}
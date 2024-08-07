$(document).ready(function() {
    $('#enviar').click(function() {
        const Nombre = $('#txtNombre').val();
        const Email = $('#txtEmail').val();
        const NrodeTelefono = $('#txtNro').val();
        const Direccion = $('#txtDireccion').val();
        
        const Nombredemascota = $('#txtNombre').val();
        const TipodeMascota = $('#txtTipo').val();
        const Raza = $('#txtRaza').val();
        const Edad = $('#txtEdad').val();
        
        console.log = "INFORMACION DEL CLIENTE:\n" +
                     "Nombres: " + Nombres + "\n" +
                      "Email: " + Email + "\n" +
                      "N° de telefono: " + Nrodetelefono + "\n" +
                      "Direccion: " + Direccion + "\n\n" +
                      "INFORMACION DE LA MASCOTA:\n" +
                      "Nombre de Mascota: " + NombredeMascota + "\n" +
                      "Tipo de Mascota: " + TipodeMascota + "\n" +
                      "Raza: " + Raza + "\n" +
                      "Edad: " + Edad;
            });
});
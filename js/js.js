const DIA = document.getElementById("dia");
const MES = document.getElementById("mes");
const SIGNO = document.getElementById("signo");
const IMGSIGNO = document.getElementById("imgsigno");

console.log(IMGSIGNO);

function comparar() {

    let dia = parseInt(DIA.value);
    let mes = parseInt(MES.value);
    let signoZodiacal = '';
    let imagenSigno = '';
    console.log("IMGSIGNO")


    if (mes == 1) {

        signoZodiacal = (dia <= 19) ? 'Capricornio' : 'Acuario';


    } else if (mes == 2) {

        signoZodiacal = (dia <= 18) ? 'Acuario' : 'Piscis';

    } else if (mes == 3) {

        signoZodiacal = (dia <= 20) ? 'Piscis' : 'Aries';

    } else if (mes == 4) {

        signoZodiacal = (dia <= 19) ? 'Aries' : 'Tauro';

    } else if (mes == 5) {

        signoZodiacal = (dia <= 20) ? 'Tauro' : 'Geminis';

    } else if (mes == 6) {

        signoZodiacal = (dia <= 20) ? 'Geminis' : 'Cancer';

    } else if (mes == 7) {

        signoZodiacal = (dia <= 22) ? 'Cancer' : 'Leo';

    } else if (mes == 8) {

        signoZodiacal = (dia <= 22) ? 'Leo' : 'Virgo';

    } else if (mes == 9) {

        signoZodiacal = (dia <= 22) ? 'Virgo' : 'Libra';

    } else if (mes == 10) {

        signoZodiacal = (dia <= 22) ? 'Libra' : 'Escorpio';

    } else if (mes == 11) {

        signoZodiacal = (dia <= 21) ? 'Escorpio' : 'Sagitario';

    } else if (mes == 12) {

        signoZodiacal = (dia <= 21) ? 'Sagitario' : 'Capricornio';

    }

    document.getElementById("signo").innerHTML = signoZodiacal
    imagenSigno = './img/img' + signoZodiacal + '.jpg';
     console.log (imagenSigno);
    IMGSIGNO.src = imagenSigno;

}
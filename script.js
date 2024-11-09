function mostrarNombres() {
    let integrantes = ["Jhoan Estiven", "Marlon Torres", "Miguel Suarez", "Juan Jose", "cristian arenas"];
    for (let i = 0; i < integrantes.length; i++) {
        alert(`En nuestros equipo de trabajo estan:` + integrantes[i]);
    }
}

/* Styles JS */
document.querySelector('.btnClick').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#2b86dc';
    this.style.boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px';

});

document.querySelector('.btnClick').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#3696ef';
    this.style.boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px';
});

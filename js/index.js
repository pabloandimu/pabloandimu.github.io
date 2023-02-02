
document.getElementById('cv').addEventListener('mouseover', function () {
    
    document.getElementById('cv').innerHTML = "Próximamente: Full Stack Developer"
    //document.getElementById('contenedor-letras-cv').innerHTML = "Próximamente: Full Stack Developer"
    document.body.style.backgroundColor = '#f0ffa2'
})

document.getElementById('cv').addEventListener('mouseout', function () {
    
    document.getElementById('cv').innerHTML = "CV Pablo Mujica | Desarrollo WEB"
    document.body.style.backgroundColor = '#ffffff'
})

document.getElementById('habilidades').addEventListener('mouseover', function () {
    
    document.getElementById('cv').innerHTML = "Próximamente: Full Stack Developer"
    //document.getElementById('contenedor-letras-cv').innerHTML = "Próximamente: Full Stack Developer"
    document.body.style.backgroundColor = '#f0ffa2'
})

document.getElementById('habilidades').addEventListener('mouseout', function () {
    
    document.getElementById('cv').innerHTML = "CV Pablo Mujica | Desarrollo WEB"
    document.body.style.backgroundColor = '#ffffff'
})
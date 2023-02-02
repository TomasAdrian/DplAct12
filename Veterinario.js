class animal{
    constructor(nombre,peso,diagnostico){
        this.nombre = nombre;
        this.peso = peso;
        this.diagnostico = diagnostico;
        this.consulta = 0;
    }

    set setNombre(nombre){
        this.nombre = nombre
    }
    set setpeso(kg){
        this.peso = kg
    }
    set setDiagnostico(diag){
        this.diagnostico = diag
    }
    set setConsulta(consult){
        this.consulta = consult
    }

    get getNombre(){
        return this.nombre
    }
    get getpeso(){
        return this.peso
    }
    get getDiagnostico(){
        return this.diagnostico
    }
    get getConsulta(){
        return this.consulta
    }

    precioPorKg(){
       return (this.peso > 10 ? this.consulta = 100 : this.consulta = this.consulta)
    } 
}

class perro extends animal{
    constructor(nombre,peso,diagnostico){
        super(nombre,peso,diagnostico);
        super.consulta = 50;
    }
    precioPorKg(){
        return super.precioPorKg();  
     }
     
}

class gato extends animal{
    constructor(nombre,peso,diagnostico){
        super(nombre,peso,diagnostico);
        super.consulta = 30;
    }

    precioPorKg(){
       return super.precioPorKg();
        
     }
     
}

class loro extends animal{
    constructor(nombre,peso,diagnostico){
        super(nombre,peso,diagnostico);
        super.consulta = 70;
    }
    precioPorKg(){
       return super.precioPorKg();
        
     }
}

function mostrar(){
    var perros = new perro("kith", 15, "Saludable")
    var gatos = new gato("miau", 8, "Saludable")
    var loros = new loro("gaston", 5, "Saludable")

    document.write(perros.nombre + perros.precioPorKg())
}
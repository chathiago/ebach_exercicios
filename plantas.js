// Abstração
function Planta(nomeCientifico, nomeComum, familia, especie) {
    this.nomeCientifico = nomeCientifico;
    this.nomeComum = nomeComum;
    this.familia = familia;
    this.especie = especie;

    // Metodo da Planta
    this.fotossintese = function() {
        return `${this.nomeComum} está pegado sol e fazendo fotossíntese.`;
    }
}

// Herança 1 da Planta()
function Flor (nomeCientifico, nomeComum, familia, especie, corDaFlor) {
    Planta.call(this, nomeCientifico, nomeComum, familia, especie);
    this.cor = corDaFlor;

    // Metodo da Flor
    this.florir = function() {
        return `${this.nomeComum} está desabrochando flores ${this.cor}.`;
    }
}

// Herança 2 da Planta()
function Arvore (nomeCientifico, nomeComum, familia, especie, alturaMaxima, tipoDeFruta = 'nenhuma') {
    Planta.call(this, nomeCientifico, nomeComum, familia, especie);
    this.alturaMaxima = alturaMaxima;
    this.tipoDeFruta = tipoDeFruta;
    
    // Metodos da Arvore
    this.verFrutas = function() {
        if (this.tipoDeFruta === 'nenhuma') {
            return `${this.nomeComum} não gera frutas.`;
        } else {
            return `${this.nomeComum} gera frutas do tipo ${this.tipoDeFruta}.`;
        }
    }

    this.verAltura = function() {
        if (typeof this.alturaMaxima === 'number') {
            return `${this.nomeComum} pode crescer até ${this.alturaMaxima} metros.`;
        }
    }
}

// Instancias
const margarida = new Flor("Leucanthemum vulgare", "Margarida", "Asteraceae", "L. vulgare", "branca");
const lirio = new Flor("Iris pseudacorus", "Lírio Amarelo", "Iridaceae", "Lilium", "amarela");

const ipeAmarelo = new Arvore("Handroanthus serratifolius", "Ipê Amarelo", "Bignoniaceae", "H. serratifolius", 30, "Não comestível");
console.log(ipeAmarelo.verAltura());
const mangueira = new Arvore("Mangifera indica", "Mangueira", "Anacardiaceae", "Indica", 30, "Manga");
console.log(mangueira.verFrutas());

// Consoles
console.log(margarida);
console.log(margarida.cor);
console.log(lirio);
console.log(lirio.cor);
console.log(ipeAmarelo);
console.log(ipeAmarelo.tipoDeFruta);
console.log(mangueira);
console.log(mangueira.tipoDeFruta);
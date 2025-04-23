export class Veiculo {
    #placa;
    #modelo;
    #cor;
    #tipo;
    #clienteId;
 
    constructor(placa, modelo, cor, tipo, clienteId) {
        if (!placa || !modelo || !tipo || !clienteId) {
            throw new Error("Dados do veículo inválidos.");
        }
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#tipo = tipo;
        this.#clienteId = clienteId;
    }
 
    get placa() {return this.#placa; }
    get modelo() {return this.#modelo; }
    get cor() {return this.#cor; }
    get tipo() {return this.#tipo; }
    get clienteId() {return this. clienteId; }
 
    toString() {
        return `Placa: ${this.#placa}, Modelo: ${this.#modelo}, Cor: ${this.#cor}, Tipo: ${this.#tipo}`;
    }
 
    static fromJSONobject(obj) {
        return new Veiculo(obj.placa, obj.modelo, obj.cor, obj.tipo, obj.clienteId);
    }
 
    toJSON() {
        return {
            placa: this.#placa,
            modelo: this.#modelo,
            cor: this.#cor,
            tipo: this.#tipo,
            clienteId: this.#clienteId
        };
    }
}
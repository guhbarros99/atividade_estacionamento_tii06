export class Pessoa {
    #nome;
    #documento;

    constructor(nome, documento) {
        if (!nome || documento) {
            throw new Error("Os Dados não foram inseridos");
        }

        this.#nome = nome;
        this.#documento = documento;
    }
    get nome() {
        return this.#nome
    }

    get documento() {
        return this.#documento
    }
    toString() {
        return `${super.toString()}, Matrícula: ${this.#nome}, Cargo: ${this.#documento}`
    };
}

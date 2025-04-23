import { Utils } from "./Utils.js";
import { BancoDeDados } from "./BancoDeDados.js";

export class RegistrodeEstacionamento{
    #id
    #Veiculo
    #Cliente
    #horadeEntrada
    #horadeSaida
    #valorCobrado

    constructor (Veiculo, Cliente){
        if(!(Veiculo instanceof Veiculo) || !(Cliente instanceof Cliente)) {
            throw new Error("Dados para invalidos para registros. ");
        }
        this.#id = Utils.getProximoId('registro-');
        this.#Veiculo = Veiculo;
        this.#Cliente = Cliente;
        this.#horadeEntrada = new Date(); 
        this.#horadeSaida = null;
        this.#valorCobrado =  null;
        

        }
        get id(){return this.#id} 
        get Veiculo(){return this.#Veiculo} 
        get Cliente(){return this.#Cliente} 
        get horadeEntrada(){return this.#horadeEntrada} 
        get horadeSaida(){return this.#horadeSaida} 
        get valorCobrado(){return this.#valorCobrado}
        
        FinalizarSaida(){
            this.horadeSaida = new Date();
            const horas = Math.ceil((this.#horadeSaida - this.#horadeEntrada) / (1000 * 60 * 60));
            this.#valorCobrado = 10 + math.max(0, horas -1)* 1
        }
        static fromJSONobject(obj) {
            const veiculo = BancoDeDados.buscarVeiculoPorPlaca(obj.veiculo.placa);
            const cliente = BancoDeDados.buscarClientePorId(obj.cliente.id);
            const registro = new RegistroEstacionamento(veiculo, cliente);
            registro.#id = obj.id;
            registro.#horadeEntrada = new Date(obj.horaEntrada);
            registro.#horadeSaida = obj.horaSaida ? new Date(obj.horaSaida) : null;
            registro.#valorCobrado = obj.valorCobrado;
            return registro;
        }
     
        toJSON() {
            return {
                id: this.#id,
                veiculo: this.#Veiculo.toJSON(),
                cliente: { id: this.#Cliente.id },
                horaEntrada: this.#horadeEntrada,
                horaSaida: this.#horadeSaida,
                valorCobrado: this.#valorCobrado
            };
        }
}
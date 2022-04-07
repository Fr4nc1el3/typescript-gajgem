export class Veiculo {
  protected _marca: string;
  protected _tipo: string;
  protected _modelo: string;
  

  
  
  status(): string {
      return (
          "Veiculo: \n" +
          "\nNome: " +
          this._nome +
          ("\nEnergia:🔌 " + this._armadura.toFixed(1)) +
          ("\nAtaque: 🗡️ " + this._vidaMaxima.toFixed(1)) +
          ("\nDefesa: 🛡️" + this._vidaAtual.toFixed(1))
      );
  }
}
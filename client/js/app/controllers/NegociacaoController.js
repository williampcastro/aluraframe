class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        const negociacaoData = {
            data: this._getDate(),
            quantidade: this.inputQuantidade.value,
            valor: this.inputValor.value
        }

        const negociacao = new Negociacao(negociacaoData);

        console.log(negociacao);

    }

    _getDate() {

        const dataFormatada = this.inputData.value
            .split("-")
            .map((item, indice) => item - indice % 2);

        return new Date(...dataFormatada);
    }

}
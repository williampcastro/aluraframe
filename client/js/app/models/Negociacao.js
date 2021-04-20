class Negociacao {

    constructor({ data = new Date(), quantidade = 0, valor = 0 }) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = parseFloat(valor);

        Object.freeze(this);

    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}
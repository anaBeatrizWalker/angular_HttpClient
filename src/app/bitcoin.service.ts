import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Resposta {
  time: {
    updated: string; //só pega o updated dentre todos os atributos do objeto time
  };
  disclaimer: string;
  bpi: {
    //lista para pegar todos os objetos listados (USD, GBP, EUR)
    [key in 'USD' | 'GBP' | 'EUR']: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    };
  };
}

//Para armazenar os últimos valores
interface PriceUpdate {
  timestamp: Date;
  USD: number;
  GBP: number;
  EUR: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Resposta; //não é um array porque o json é apenas um objeto
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];

  constructor(private http: HttpClient) {}

  getAndUpdate() {
    this.http
      .get<Resposta>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
        this.updateList.push({
          timestamp: this.lastUpdate,
          USD: this.currentPrice.bpi.USD.rate_float,
          GBP: this.currentPrice.bpi.GBP.rate_float,
          EUR: this.currentPrice.bpi.EUR.rate_float,
        });
      });
  }
}

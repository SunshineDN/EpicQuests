import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:3000/produtos';

  constructor(private _httpClient: HttpClient) { }

  getProduto(id:any): Observable<Produto> {
    const urlAtualizar = `${this.url}?id=${id}`
    return this._httpClient.get<Produto>(urlAtualizar);
  }

  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);
  }

  cadastrarProduto(produto: Produto): Observable<Produto[]>{
    return this._httpClient.post<Produto[]>(this.url, produto);
  }

  atualizarProduto(id: any, produto: Produto): Observable<Produto[]>{
    const urlAtualizarProduto = `${this.url}/${id}`;
    return this._httpClient.put<Produto[]>(urlAtualizarProduto, produto);
  }

  removerProduto(id: any): Observable<Produto[]>{
    const urlRemoverProduto = `${this.url}/${id}`;
    return this._httpClient.delete<Produto[]>(urlRemoverProduto);
  }

}

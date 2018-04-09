import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HospitalService {

  totalHospital: number;

  constructor(private http: HttpClient) { }

  carregarHospitais() {
    const url = 'http://localhost:3000/hospital';

    return this.http.get(url)
                    .map((resp: any) => {
                      this.totalHospital = resp.total;
                      return resp.hospitais;
                    });
  }

  obterHospital(id: number) {
    const url = `http://localhost:3000/hospital${id}`;

    return this.http.get(url)
                    .map((resp: any) => resp.hospital);
  }

  deletarHospital(id: number) {

  }

}

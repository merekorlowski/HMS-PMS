/**
 * Created by os on 12/3/2017.
 */
import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'
import {Division} from '../models/division'
import {config} from '../config'

export class DivisionService {
    constructor() {
        this.http = new HttpClient().configure(config => {
            config.withBaseUrl(config.baseUrl);
        })
    }

    getDivision(_id){
        return this.http.fetch(`/division?_id=${_id}`).then(response => response.json()).then(data => {
            return new Division(data)
        })
    }

    getDivisions() {
        return this.http.fetch('/divisions').then(response => response.json()).then(data => {
            console.log(data)
            return data.map(division => new Division(division))
        })
    }

    consult(_id) {
        return this.http.fetch(`/division?_id=${_id}`).then(response => response.json())
    }

    createDivision(division) {
        return this.http.fetch('/division', {
            method: 'post',
            body: json(division)
        }).then(response => response.json())
    }

}

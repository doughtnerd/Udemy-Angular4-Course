
import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServersService {

  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-angular4-course.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://udemy-angular4-course.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://udemy-angular4-course.firebaseio.com/data.json').map((response: Response) => {
    // return this.http.get('https://udemy-angular4-course.firebaseio.com/data').map((response: Response) => {
      const data = response.json();
      for (const server of data) {
        server.name = 'FETCED ' + server.name;
      }
      return data;
    }).catch((error: Response) => {
      console.log(error);
      // return Observable.throw(error);
      return Observable.throw('something went wrong!');
    });
  }

  getAppName() {
    return this.http.get('https://udemy-angular4-course.firebaseio.com/appName.json').map((data: Response) => {
      return data.json();
    });
  }
}

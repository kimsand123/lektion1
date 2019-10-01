import {decorate, observable} from "mobx";
import axios from "axios";


const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/":""; // Check if dev environment


class GiraffeStore {
    stat = "Done";
    giraffes = [""];
    constructor(props){
        this.getGiraffData();
        /*fetch(baseUrl + "rest/giraffes").then(
            (response)=> response.json().then(
            (json) => this.giraffes=json
            )
        )*/
    }

    async pushGiraffData(giraffname){
        const querystring = require('querystring');
        let globalResponse = "";
        try{
            this.stat ="saving Giraff";
            let response = await axios.post(baseUrl + 'rest/giraffes',  giraffname);
            this.stat = "Done saving Giraff";
            globalResponse = response;
            this.getGiraffData();
        } catch (error){
            this.stat = "Failed at storing giraff" + globalResponse;
        }
}

    async getGiraffData() {
        try {
            this.stat = "Loading giraffes";
            let response = await axios.get(baseUrl + 'rest/giraffes');
            let data = response.data;
            console.log(response);
            this.giraffes = data;
            this.stat = "Done";
            //console.log(data);
        } catch (error) {
            this.stat = "Failed at loading giraffes";
        }
    }


}
export default GiraffeStore;

decorate(GiraffeStore,{
    giraffes: observable,
    stat: observable
})

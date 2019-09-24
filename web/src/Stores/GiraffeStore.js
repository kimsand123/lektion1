import {decorate, observable} from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/":""; // Check if dev environment

export default class GiraffeStore {
    stat = "";
    giraffes = ["Marius","Melman","tis","muh"];
    constructor(props){
        this.getGiraffData();
        /*fetch(baseUrl + "rest/giraffes").then(
            (response)=> response.json().then(
            (json) => this.giraffes=json
            )
        )*/
    }
    async getGiraffData() {
        try {
            this.stat = "Loading giraffes";
            let response = await fetch(baseUrl + "rest/giraffes");
            let data = await response.json();
            this.stat = "Done";
            this.giraffes = data;
        } catch (err) {
            this.stat = "Failed at loading giraffes";
        }
    }
}


/*export default class GiraffeStore{
    giraffes=["Marius","Melman"];
}*/

decorate(GiraffeStore,{
    giraffes: observable,
    stat: observable
})

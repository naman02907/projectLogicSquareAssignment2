// Get all the Cafes by there address by merging Cafes and places array.

const getCaliforniaCafesAddress = function(){

    var cafes= [
        {
            "name": "Bazaar Cafe",
            "place_id": "kjk234g4gcvfx8usg1l33pi"
        }, {
            "name": "Ashley's Cafe",
            "place_id": "12hydbdf76sljfts87sbfis"
        }, {
            "name": "Avenue Cafe",
            "place_id": "skjd86svvfdrsv55svbvf3f"
        }, {
            "name": "Hi-Lo Cafe",
            "place_id": "mjdhgetr4pojfyts22fzfsh"
        }, {
            "name": "California Chicken Cafe",
            "place_id": "12hydbdf76sljfts87sbfis"
        }, {
            "name": "Avenue Bakery Cafe",
            "place_id": "jahgde7wgdiau8ewsahgosd"
        }, {
            "name": "Philz Coffee",
            "place_id": "urhw3837ehalod7w02b7835"
        }
    ];
    
    
    var places= [
        {
            "id": "jahgde7wgdiau8ewsahgosd",
            "street_no": "60H",
            "locality": "Solomos Island Road",
            "postal_code": "20688",
            "lat": "36.7783 N",
            "long": "119.4179 W"
        }, {
            "id": "12hydbdf76sljfts87sbfis",
            "street_no": "1B",
            "locality": "Macarthur Blvd",
            "postal_code": "20619",
            "lat": "38.1781 N",
            "long": "118.4171 W"
        }, {
            "id": "kjk234g4gcvfx8usg1l33pi",
            "street_no": "45250",
            "locality": "Worth Avenue, Unit A",
            "postal_code": "20619",
            "lat": "36.1152",
            "long": "117.521"
        }, {
            "id": "saswe3s6yydtdr52hsd72yst",
            "street_no": "1X",
            "locality": "Macarthur Blvd",
            "postal_code": "20687",
            "lat": "36.7783",
            "long": "119.4179"
        }, {
            "id": "skjd86svvfdrsv55svbvf3f",
            "street_no": "7S",
            "locality": "Three Notch Road",
            "postal_code": "20619",
            "lat": "36.83",
            "long": "119.6"
        }, {
            "id": "mjdhgetr4pojfyts22fzfsh",
            "street_no": "22803",
            "locality": "Gunston Dr Lexington Park",
            "postal_code": "20688",
            "lat": "35.7788",
            "long": "119.979"
        }, {
            "id": "urhw3837ehalod7w02b7835",
            "street_no": "225",
            "locality": "Macarthur Blvd",
            "postal_code": "20687",
            "lat": "35.77813",
            "long": "119.41791"
        }
    ];

    // Container to hold all the cafes by there address.
    let ans= [];

    for(let i=0;i<cafes.length;i++){
        for(let j=0;j<places.length;j++){
            if(cafes[i].place_id== places[j].id){
                let temp= {
                    name : cafes[i].name,
                    "street_no" : places[j].street_no,
                    "locality" : places[j].locality,
                    "postal_code" : places[j].postal_code,
                    "lat" : places[j].lat,
                    "long" : places[j].long
                }
                ans.push(temp);
                break;
            }
        }
    }

    // Return Container
    return ans;
}

var ans= getCaliforniaCafesAddress();

// Display all the available cafes into a table.
var table= document.getElementById("table");

for(let i=0;i<ans.length;i++){
    let template = `
                <tr>
                    <td class="column1">${i+1}</td>
                    <td class="column2">${ans[i].name}</td>
                    <td class="column3">${ans[i].street_no + " " + ans[i].locality}</td>
                    <td class="column4">${ans[i].postal_code}</td>
                    <td class="column5">${ans[i].lat}</td>
                    <td class="column6">${ans[i].long}</td>
                </tr>
    `;
    table.innerHTML+= template;
}

// Display cafes by the search key output.

const searchFn= function(){
    let search= document.getElementById('search').value;
    let tr= table.getElementsByTagName('tr');
    for(let i=0;i<tr.length;i++){
        let td= tr[i].getElementsByTagName('td')[1];
        if(td){
            let name= td.innerHTML;
            if(name.toLowerCase().indexOf(search.toLowerCase())!=-1){
                tr[i].style.display= "";
            }else{
                tr[i].style.display= "none";
            }
        }
    }
}


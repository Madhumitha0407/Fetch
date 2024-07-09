fetch('https://fakestoreapi.com/products').then(data => {
    //console.log(data);
    return data.json();
}).then((completedata) =>{
    console.log(completedata);
    document.getElementById("first").innerHTML = completedata[6].title
    document.getElementById("1price").innerHTML = completedata[6].price
    document.getElementById("1dis").innerHTML = completedata[6].description
    document.getElementById("second").innerHTML = completedata[15].title
    document.getElementById("2price").innerHTML = completedata[15].price
    document.getElementById("2dis").innerHTML = completedata[15].description
    document.getElementById("third").innerHTML = completedata[19].title
    document.getElementById("3price").innerHTML = completedata[19].price
    document.getElementById("3dis").innerHTML = completedata[19].description
})
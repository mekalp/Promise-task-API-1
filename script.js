fetch("https://dog.ceo/api/breed/hound/images")
.then((resp)=>{
    return resp.json()
}).then((result)=>{
    displayData(result)
}).catch((err)=>{
  console.log(err)
})



function displayData(data){

    let container=document.querySelector(".container")

    let header= createMyElement("h1","header")
    header.innerText="Different models of afghan-Hound pictures"

    
    let row= document.createElement("div")
    row.setAttribute("class","row")

    // console.log(data)

    container.append(header)

   data.message.forEach(Response => {
    //    console.log(Response)

    let column=createMyElement("div","col-sm-12 col-md-6 col-lg-3 col-xl-4")
     
    let card= createMyElement("div","card")

    let img = createMyElement("img","card-img")
    img.src= Response


   let cardBody=createMyElement("div","card-body")

    card.append(img,cardBody)
    column.append(card)
    row.append(column)
    container.append(row)
    

   });


}

function createMyElement(elem,elemClass="",elemId=""){
    let element=document.createElement(elem)
    element.setAttribute("class",elemClass)
    element.setAttribute("id",elemId)
    return element;
}









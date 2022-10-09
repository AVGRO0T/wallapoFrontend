export const ListCommodityView = (items) => {

    const Commodity = 
     `
     <a href="http://localhost:8080/item-detail/itemDetail.html?id=${items.id} class="itemList"">
    <article>
    <div>  <img src"${items.img}">  </div>
    <h3>${items.name} </h3>
    <p> ${items.price} </p>
    <p> ${items.status} € <p> 
    <p> ${items.description} </p>
    </article> 
    </a>
    `
          
    return Commodity;
    
}
export const itemDetailhtml = (items) => {
    const Detail = `
    <article>
    <div>  <img src"${items.img}">  </div>
    <h3>${items.name} </h3>
    <p> ${items.price} </p>
    <p> ${items.status} € <p> 
    <p> ${items.description} </p>
    <button style="display: none"> Eliminar produucto </button>
    </article> 
    `
    return Detail;

}
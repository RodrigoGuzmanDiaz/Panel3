export let root = document.getElementById('rootVisualizacion')

    import {carts} from '../carts_has_products.js';
    export let opcionChp = document.getElementById('opcionCarts_has_products')
    

    import {category} from '../category.js';//Importacion de la Matriz
    export let opcionC = document.getElementById('opcionCategory');//Se tre la opcion del HTML


    import {option} from '../option.js';//Importacion de la Matriz
    export let opcionO = document.getElementById('opcionOption');//Se tre la opcion del HTML


    import {order_has_products} from '../order_has_products.js';//Importacion de la Matriz
    export let opcionOhp = document.getElementById('opcionOrder_has_products');//Se tre la opcion del HTML


    import {orders_placed_user} from '../order_placed_user.js';//Importacion de la Matriz
    export let opcionOpu = document.getElementById('opcionOrder_placed_user');//Se tre la opcion del HTML


    import {orden} from '../order.js';//Importacion de la Matriz
    export let opcionOr = document.getElementById('opcionOrder');//Se tre la opcion del HTML


    import {orders_paid_creditcard} from '../orders_paid_creditcard.js';//Importacion de la Matriz
    export let opcionOpc = document.getElementById('opcionOrders_paid_creditcard');//Se tre la opcion del HTML


    import {products_belong_category} from '../products_belong_category.js';//Importacion de la Matriz
    export let opcionPbc = document.getElementById('opcionProducts_belong_category');//Se tre la opcion del HTML


    import {products_has_options} from '../products_has_options.js';//Importacion de la Matriz
    export let opcionPho = document.getElementById('opcionProducts_has_options');//Se tre la opcion del HTML


    import {product_sold_vendor} from '../products_sold_vendor.js';//Importacion de la Matriz
    export let opcionPsv = document.getElementById('opcionProducts_sold_vendor');//Se tre la opcion del HTML


    import {products} from '../products.js';//Importacion de la Matriz
    export let opcionPr = document.getElementById('opcionProducts');//Se tre la opcion del HTML

   import {shoppingcart} from '../shoppingcart.js';
   export let opcionS = document.getElementById('opcionShopping');
    


export function Informacion(){

   
     function opcionCarts_has_products(){
        root.innerHTML = 
          '<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[0][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[0][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[0][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[0][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[1][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[1][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[1][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[1][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[2][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[2][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[2][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[2][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[3][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[3][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[3][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[3][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[4][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[4][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[4][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[4][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[5][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[5][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[5][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[5][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[6][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[6][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[6][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[6][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[7][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[7][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[7][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[7][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[8][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[8][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[8][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[8][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[9][0]+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[9][1]+'</div>'     +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[9][2]+'</div>'     +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[9][3]+'</div>'     +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[10][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[10][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[10][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[10][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[11][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[11][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[11][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[11][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[12][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[12][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[12][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[12][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[13][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[13][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[13][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[13][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[14][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[14][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[14][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[14][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[15][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[15][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[15][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[15][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[16][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[16][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[16][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[16][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[17][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[17][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[17][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[17][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[18][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[18][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[18][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[18][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[19][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[19][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[19][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[19][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[20][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[20][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[20][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[20][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[21][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[21][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[21][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[21][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[22][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[22][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[22][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[22][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[23][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[23][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[23][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[23][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[24][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[24][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[24][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[24][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[25][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[25][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[25][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[25][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[26][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[26][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[26][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[26][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[27][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[27][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[27][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[27][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[28][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[28][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[28][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[28][3]+'</div>'    +'</section>'
         +'<section class="opcionCarts_has_products">'+   '<div>'+'<div>'+'Identificaci??n del carrito de compras'+'</div>'+carts[29][0]+'</div>'   +   '<div>'+'<div>'+'ID del producto'+'</div>'+carts[29][1]+'</div>'    +   '<div>'+'<div>'+'ID de la opci??n'+'</div>'+carts[29][2]+'</div>'    +   '<div>'+'<div>'+'cantidad'+'</div>'+carts[29][3]+'</div>'    +'</section>'
       
         
    }
    opcionChp.addEventListener('click', opcionCarts_has_products)
   
   
   

   
   
   //Funcion para el Evento
    function opcionCategory(){
       root.innerHTML = 
         '<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[0][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[0][1]+'</div>'+'</div>'+     '</section>'
        +'<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[1][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[1][1]+'</div>'+'</div>'+     '</section>'
        +'<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[2][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[2][1]+'</div>'+'</div>'+     '</section>'
        +'<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[3][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[3][1]+'</div>'+'</div>'+     '</section>'
        +'<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[4][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[4][1]+'</div>'+'</div>'+     '</section>'
        +'<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[5][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[5][1]+'</div>'+'</div>'+     '</section>'
        +'<section class="opcionCategory">'+'<div>'+'<div>'+'ID de la categoria'+'</div>' +'<div>'+category[6][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Nombre de la categoria'+'</div>' +'<div>'+category[6][1]+'</div>'+'</div>'+     '</section>'
       
       
   
   }
   opcionC.addEventListener('click', opcionCategory)//Evento click ejecutada por la opcion
   
   /** *************************************************************************/

   
   
   //Funcion para el Evento
    function opcionOption(){
       root.innerHTML = 
          '<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[0][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[0][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[1][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[1][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[2][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[2][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[3][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[3][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[4][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[4][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[5][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[5][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[6][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[6][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[7][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[7][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[8][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[8][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[9][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[9][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[10][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[10][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[11][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[11][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[12][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[12][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[13][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[13][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[14][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[14][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[15][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[15][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[16][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[16][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[17][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[17][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[18][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[18][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[19][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[19][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[20][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[20][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[21][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[21][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[22][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[22][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[23][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[23][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[24][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[24][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[25][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[25][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[26][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[26][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[27][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[27][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[28][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[28][1]+'</div>'+'</div>'    +    '</section>'
         +'<section class="opcionOption">'  +     '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+option[29][0]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Nombre de la opcion'+'</div>' +'<div>'+option[29][1]+'</div>'+'</div>'    +    '</section>'
       
       
   
   }
   opcionO.addEventListener('click', opcionOption)//Evento click ejecutada por la opcion
   
   /*************************************************************************************************************** */

   
   
   //Funcion para el Evento
    function opcionOrder_has_products(){
       root.innerHTML = 
         '<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[0][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[0][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[0][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[0][3]+'</div>'+'</div>'+      '</section>'
        +'<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[1][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[1][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[1][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[1][3]+'</div>'+'</div>'+      '</section>'
        +'<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[2][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[2][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[2][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[2][3]+'</div>'+'</div>'+      '</section>'
        +'<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[3][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[3][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[3][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[3][3]+'</div>'+'</div>'+      '</section>'
        +'<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[4][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[4][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[4][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[4][3]+'</div>'+'</div>'+      '</section>'
        +'<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[5][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[5][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[5][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[5][3]+'</div>'+'</div>'+      '</section>'
        +'<section class="opcionOrder_has_products">'+'<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+order_has_products[6][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+order_has_products[6][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'ID de la opci??n'+'</div>' +'<div>'+order_has_products[6][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Cantidad'+'</div>' +'<div>'+order_has_products[6][3]+'</div>'+'</div>'+      '</section>'
       
   }
   opcionOhp.addEventListener('click', opcionOrder_has_products)//Evento click ejecutada por la opcion
   
   
   
   
   
   
   //Funcion para el Evento
    function opcionOrder_placed_user(){
       root.innerHTML = 
        '<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[0][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[0][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[1][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[1][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[2][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[2][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[3][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[3][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[4][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[4][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[5][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[5][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrder_placed_user">'  +   '<div>'+'<div>'+'ID del usuario'+'</div>' +'<div>'+orders_placed_user[6][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_placed_user[6][1]+'</div>'+'</div>'  +   '</section>'
   
   }
   opcionOpu.addEventListener('click', opcionOrder_placed_user)//Evento click ejecutada por la opcion
   
   
   /*************************************************************************************************************** */
   
   
   
   //Funcion para el Evento
 function opcionOrder(){
       root.innerHTML = 
         '<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[0][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[0][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[0][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[0][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[0][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[0][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[0][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[0][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[0][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[0][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[0][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[0][11]+'</div>'+'</div>'+   '</section>'
        +'<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[1][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[1][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[1][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[1][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[1][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[1][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[1][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[1][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[1][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[1][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[1][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[1][11]+'</div>'+'</div>'+   '</section>'
        +'<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[2][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[2][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[2][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[2][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[2][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[2][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[2][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[2][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[2][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[2][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[2][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[2][11]+'</div>'+'</div>'+   '</section>'
        +'<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[3][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[3][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[3][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[3][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[3][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[3][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[3][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[3][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[3][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[3][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[3][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[3][11]+'</div>'+'</div>'+   '</section>'
        +'<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[4][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[4][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[4][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[4][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[4][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[4][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[4][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[4][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[4][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[4][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[4][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[4][11]+'</div>'+'</div>'+   '</section>'
        +'<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[5][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[5][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[5][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[5][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[5][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[5][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[5][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[5][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[5][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[5][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[5][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[5][11]+'</div>'+'</div>'+   '</section>'
        +'<section class="opcionOrder">'+'<div>'+'<div>'+'ID de orden'+'</div>' +'<div>'+orden[6][0]+'</div>'+'</div>'      +       '<div>'+'<div>'+'Total de objetos'+'</div>' +'<div>'+orden[6][1]+'</div>'+'</div>'     +        '<div>'+'<div>'+'Gastos de env??o'+'</div>' +'<div>'+orden[6][2]+'</div>'+'</div>'+    '<div>'+'<div>'+'Impuesto'+'</div>' +'<div>'+orden[6][3]+'</div>'+'</div>'+     '<div>'+'<div>'+'Total del costo'+'</div>' +'<div>'+orden[6][4]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de orden'+'</div>' +'<div>'+orden[6][5]+'</div>'+'</div>'+     '<div>'+'<div>'+'Fecha de entrega'+'</div>' +'<div>'+orden[6][6]+'</div>'+'</div>'+     '<div>'+'<div>'+'Nombre del barco'+'</div>' +'<div>'+orden[6][7]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del barco'+'</div>' +'<div>'+orden[6][8]+'</div>'+'</div>'+     '<div>'+'<div>'+'Direccion del envio'+'</div>' +'<div>'+orden[6][9]+'</div>'+'</div>'+     '<div>'+'<div>'+'Numero de rastreo'+'</div>' +'<div>'+orden[6][10]+'</div>'+'</div>'+    '<div>'+'<div>'+'Estado de entrega'+'</div>' +'<div>'+orden[6][11]+'</div>'+'</div>'+   '</section>'
       
       
   
   }
   opcionOr.addEventListener('click', opcionOrder)//Evento click ejecutada por la opcion
   
   /*************************************************************************************************************** */

   
   
   //Funcion para el Evento
    function opcionOrders_paid_creditcard(){
       root.innerHTML = 
        '<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[0][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[0][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[1][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[1][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[2][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[2][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[3][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[3][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[4][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[4][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[5][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[5][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionOrders_paid_creditcard">'  +   '<div>'+'<div>'+'Numero de tarjeta de credito'+'</div>' +'<div>'+orders_paid_creditcard[6][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la orden'+'</div>' +'<div>'+orders_paid_creditcard[6][1]+'</div>'+'</div>'  +   '</section>'
       
   
   }
   opcionOpc.addEventListener('click', opcionOrders_paid_creditcard)//Evento click ejecutada por la opcion
   
   
   
   /*************************************************************************************************************** */

   
   
   //Funcion para el Evento
    function opcionProducts_belong_category(){
       root.innerHTML = 
        '<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[0][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[0][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[1][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[1][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[2][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[2][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[3][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[3][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[4][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[4][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[5][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[5][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[6][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[6][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[7][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[7][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[8][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[8][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[9][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[9][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[10][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[10][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[11][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[11][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[12][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[12][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[13][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[13][1]+'</div>'+'</div>'  +   '</section>'    
       +'<section class="opcionProducts_belong_category">'  +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products_belong_category[14][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID de la categor??a'+'</div>' +'<div>'+products_belong_category[14][1]+'</div>'+'</div>'  +   '</section>'    
   
   }
   opcionPbc.addEventListener('click', opcionProducts_belong_category)//Evento click ejecutada por la opcion
   
   /*************************************************************************************************************** */

   
   
   //Funcion para el Evento
    function opcionProducts_has_options(){
       root.innerHTML = 
        '<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[0][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[0][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[0][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[0][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[0][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[0][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[1][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[1][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[1][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[1][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[1][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[1][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[2][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[2][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[2][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[2][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[2][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[2][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[3][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[3][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[3][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[3][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[3][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[3][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[4][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[4][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[4][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[4][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[4][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[4][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[5][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[5][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[5][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[5][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[5][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[5][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[6][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[6][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[6][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[6][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[6][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[6][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[7][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[7][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[7][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[7][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[7][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[7][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[8][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[8][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[8][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[8][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[8][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[8][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[9][0]+'</div>'    +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[9][1]+'</div>'     +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[9][2]+'</div>'     +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[9][3]+'</div>' +   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[9][4]+'</div>'      +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[9][5]+'</div>'            +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[10][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[10][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[10][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[10][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[10][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[10][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[11][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[11][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[11][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[11][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[11][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[11][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[12][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[12][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[12][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[12][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[12][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[12][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[13][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[13][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[13][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[13][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[13][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[13][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[14][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[14][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[14][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[14][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[14][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[14][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[15][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[15][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[15][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[15][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[15][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[15][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[16][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[16][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[16][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[16][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[16][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[16][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[17][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[17][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[17][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[17][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[17][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[17][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[18][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[18][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[18][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[18][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[18][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[18][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[19][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[19][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[19][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[19][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[19][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[19][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[20][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[20][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[20][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[20][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[20][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[20][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[21][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[21][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[21][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[21][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[21][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[21][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[22][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[22][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[22][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[22][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[22][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[22][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[23][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[23][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[23][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[23][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[23][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[23][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[24][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[24][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[24][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[24][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[24][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[24][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[25][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[25][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[25][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[25][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[25][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[25][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[26][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[26][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[26][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[26][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[26][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[26][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[27][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[27][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[27][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[27][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[27][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[27][5]+'</div>'           +'</section>'
       +'<section class="opcionProducts_has_options">'+   '<div>'+'<div>'+'ID del producto'+'</div>'+products_has_options[28][0]+'</div>'   +   '<div>'+'<div>'+'ID del opci??n'+'</div>'+products_has_options[28][1]+'</div>'    +   '<div>'+'<div>'+'Cantidad'+'</div>'+products_has_options[28][2]+'</div>'    +   '<div>'+'<div>'+'Precio'+'</div>'+products_has_options[28][3]+'</div>'+   '<div>'+'<div>'+'En venta'+'</div>'+products_has_options[28][4]+'</div>'     +   '<div>'+'<div>'+'Especificaciones'+'</div>'+products_has_options[28][5]+'</div>'           +'</section>'
     
   
   }
   opcionPho.addEventListener('click', opcionProducts_has_options)//Evento click ejecutada por la opcion
   /*************************************************************************************************************** */
   
   /*************************************************************************************************************** */

   
   
   //Funcion para el Evento
    function opcionProducts_sold_vendor(){
       root.innerHTML = 
        '<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[0][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[0][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[1][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[1][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[2][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[2][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[3][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[3][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[4][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[4][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[5][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[5][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[6][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[6][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[7][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[7][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[8][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[8][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[9][0]+'</div>'+'</div>'     +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[9][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[10][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[10][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[11][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[11][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[12][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[12][1]+'</div>'+'</div>'  +   '</section>'
       +'<section class="opcionProducts_sold_vendor">'  +   '<div>'+'<div>'+'ID del Proveedor'+'</div>' +'<div>'+product_sold_vendor[13][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+product_sold_vendor[13][1]+'</div>'+'</div>'  +   '</section>'    
   
   }
   opcionPsv.addEventListener('click', opcionProducts_sold_vendor)//Evento click ejecutada por la opcion
   
   

   
   //Funcion para el Evento
    function opcionProducts(){
       root.innerHTML = 
        '<section class="opcionProducts">'  +     '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products[0][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre del producto'+'</div>' +'<div>'+products[0][1]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Descripci??n'+'</div>' +'<div>'+products[0][2]+'</div>'+'</div>'    +    '</section>'
       +'<section class="opcionProducts">'  +     '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products[1][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre del producto'+'</div>' +'<div>'+products[1][1]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Descripci??n'+'</div>' +'<div>'+products[1][2]+'</div>'+'</div>'    +    '</section>'
       +'<section class="opcionProducts">'  +     '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products[2][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre del producto'+'</div>' +'<div>'+products[2][1]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Descripci??n'+'</div>' +'<div>'+products[2][2]+'</div>'+'</div>'    +    '</section>'
       +'<section class="opcionProducts">'  +     '<div>'+'<div>'+'ID del producto'+'</div>' +'<div>'+products[3][0]+'</div>'+'</div>'       +   '<div>'+'<div>'+'Nombre del producto'+'</div>' +'<div>'+products[3][1]+'</div>'+'</div>'      +   '<div>'+'<div>'+'Descripci??n'+'</div>' +'<div>'+products[3][2]+'</div>'+'</div>'    +    '</section>'
       
   
   }
   opcionPr.addEventListener('click', opcionProducts)//Evento click ejecutada por la opcion
   
   

    function opcionShopping(){
       root.innerHTML = 
             '<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[0][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[0][1]+'</div>'+'</div>'  +   '</section>'
            +'<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[1][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[1][1]+'</div>'+'</div>'  +   '</section>'
            +'<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[2][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[2][1]+'</div>'+'</div>'  +   '</section>'
            +'<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[3][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[3][1]+'</div>'+'</div>'  +   '</section>'
            +'<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[4][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[4][1]+'</div>'+'</div>'  +   '</section>'
            +'<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[5][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[5][1]+'</div>'+'</div>'  +   '</section>'
            +'<section class="opcionShopping">'  +   '<div>'+'<div>'+'ID del carrito de compras'+'</div>' +'<div>'+shoppingcart[6][0]+'</div>'+'</div>'    +   '<div>'+'<div>'+'Estado'+'</div>' +'<div>'+shoppingcart[6][1]+'</div>'+'</div>'  +   '</section>'
   
       
   }
   opcionS.addEventListener('click', opcionShopping)
}
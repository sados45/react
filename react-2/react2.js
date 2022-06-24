//VIRTUAL DOM____________________:Sanal dom


//Js Dom ile React dom yapisal olarak aynidir. react ta bu virtual dom olur. sanal demektir virtual. 

//gercek dom ile virtual dom arasindaki degisen unsuru bulup, ilgili kisimda degisiklik yapiyor. react. fav örnegi. sadece fav da var mesela degisiklik. onu ilgili kisim icinde hallediyor. bu da sistemin hizini etkiliyor. hizli calisiyor. 


//COMPONENT___________________________: bilesen, bir butunun parcaciklari.
//türkiye ana component bolgeler alt component, onun altinda iller alt komponent, ilcelerde alt komponent gidiyor bu sekilde. 

//terminali tekrar acip projeyi baslatmak icin cd my-app sonra npm start yazdik. ve basladi.
//my-app icindeki node modules icinde sistemsel dosyalar vardir. hemen altinda public dosyasi var. bu dosyanin icinde index.html dosyasi var public icinde. resimleri public dosyasinin icinde tutuluyor. burada public dosyanin icinde index.html cok ÖNEMLI...biz projelerimizi src dosyasinin icinde yazacagiz. 


//yazdigimiz projelerde public icinde yer alan index html icine kesinlikle yamiyoruz. yazacagimiz yer butrasi degil. src icerisine yaziyoruz. <div id="root"> ASLINDA BU DIV ICERISINDE YER ALIYOR: ANA DIV BURASI OLUYOR INDEX:HTML ICERSINDE:</div>

//src dosyasinin icersinde yer alan index.js dosyasinin icinde yer alan 
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   ); bu bolum icinde yer alan rootun icindeki App i cagiriyoruz. yani id si root olan elemani bul, sonra icinde bulunan App i calistir diyoruz. 
//burada root.render demek isle, calistir anlaminda. 


const increaseButton= document.querySelector('.increase')
const decreaseButton= document.querySelector('.decrease')
let count= document.querySelector('p').innerText ="0";


increaseButton.addEventListener('click', () => {

   count ++
  // console.log('count')
  document.querySelector('p').innerText= count
})

decreaseButton.addEventListener('click', () => {
    count --

   // console.log('count')
    //console.log('decrease');

    document.querySelector('p').innerText= count //bunu atayarak p icindeki sayimiz 0 dan yukari ve asagi dogru artirip azaltabilyoruz. 
})

//javascripte count sayisini html icinde ilk önce 0 verdik. bu nedenle bu sekilde kaliyor. dinamiklik vermiyor bu duruma js. her seferinde atama yapmak gerekiyor yani. 


//JSX ______________:
// biz jsx ile hem js kodlarini hemde html kodlarini birlikte yazabiliyoruz. 

// mesela burada class tagi className seklinde yaziliyor. 
//onclick, onClick seklinde yazilir. gibi...
//biz react ile sayfamizda yapilan mesela tiklama degisikligi gibi özel alan verilerini hemen yine sayfamizda görebiliyoruz. 

//browserlar html css ve js. kodlarini tanirlar. xml uzantili oldugu icin. reacti tanimazlar cunku jsx uzantili oldugu icin. 
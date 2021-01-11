
// import state from './state';

let state ={

  messedgedata :{
    messedgedata: [
    { id: 1, messedge: "my first post", likepost: "  лайк 3" },
    { id: 2, messedge: "завали хлебальник", likepost: "  лайк 1160" },
    { id: 3, messedge: "завали хлебальник", likepost: "  лайк 1162" }
  ],
},
   DialogData : [
    {id: "1", name: "Екатерина"},
    {id: "2", name: "Игорь"},
    {id: "3", name: "Анна"},
    {id: "4", name: "Егор"},
    {id: "5", name: "Егор"},
    {id: "6", name: "Патап"},
  ],
     messedgeData : [
      {id: "1", messedge: "Привет"},
      {id: "2", messedge: "Привет"},
      {id: "3", messedge: "Пошел в попу"},
      {id: "4", messedge: "Ты же первая написала."},
      {id: "5", messedge: "Дура вообще"},
      {id: "6", messedge: "сам такой"},

    ],
    // avatar : [
    //   {id: "1", avatar: "aslkjdfh"},
    //   {id: "2", avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.u8ODctH1__nCOfu47xIgHgHaHa%26pid%3DApi&f=1"}
    // ]
    
}
 export let addPost =(writePost)=>{
  let addPostFirst ={
    id: 7, 
    messedge: (writePost),
    likepost: "лайк 0"
  } 
    state.messedgedata.messedgedata.push(addPostFirst)
  
}

export default state;
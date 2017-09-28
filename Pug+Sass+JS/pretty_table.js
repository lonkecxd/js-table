// Initialize Firebase

// end Initialize Firebase

// var slide_data = firebase.database().ref('slide_data');
// slide_data.on('value', function(snapshot) {
//   console.log(snapshot.val());
//   vm.slide_data = snapshot.val();
// });
var d =  [ {
  "cover" : "https://unsplash.it/800/600?image=1083",
  "description" : "翻身群众把歌唱",
  "title" : "新村绿野"
}, {
  "cover" : "https://unsplash.it/800/600?image=1082",
  "description" : "歌唱我们繁荣昌盛的祖国",
  "title" : "花团锦簇"
}, {
  "cover" : "https://unsplash.it/800/600?image=1081",
  "description" : "胜利的号角声已经吹响",
  "title" : "柳暗花明"
} ];

Vue.component("lazy_table",{
  template: "#template_lazy_table",
  props: ["table_data","rows"],
  data (){
    return{
    per_page_count: 2,
    page_index: 0,
    search_key:''
    }
  },
  computed:{
    keys(){
      return this.table_data.map(row=>
              Object.keys(row))  //获得所有key
              .reduce((a,b)=>a.concat(b),[])  //拼接成一个数组
              .filter((data,index,arr)=>arr.indexOf(data)==index); //只留下第一次出现的，即去掉重复的
    },
    sliced_table_data(){
      let start = this.page_index*this.per_page_count;
      let end = (this.page_index+1)*this.per_page_count;
      return this.searched_table_data.slice(start,end);
    },
    page_count(){
      return parseInt(this.table_data.length/this.per_page_count);
    },
    searched_table_data(){
      var clone = JSON.parse(JSON.stringify(this.table_data))
      var re = new RegExp("("+this.search_key+")");
      var temp = clone.filter(o=>
         Object.values(o).reduce(
           (a,b)=>a||(b+"").indexOf(this.search_key)!=-1,false 
      )                       
      )//过滤掉，只留下符合的放在a里面。
      return temp
      
    }
    
  },
  methods:{
    change_name(row_name){
      var name_lsit = this.rows.map(o=>{
        if(typeof o == "string"){
          return {
            name: o.split(" -> ")[0],
            as:o.split(" -> ")[1]
          } 
        }else
            return o;
      });
      var item = name_lsit.find(col=>col.name == row_name);
      if(item){
        return item.as
      }else{
        return row_name
      }
    }
  }
});

var vm = new Vue({
  el:"#app",
  data: {
    slide_data: d,
    config:[
      {
        name: "title",as:"标题"
      },
      "description -> 描述",
      "cover -> 封面"
      
    ]
  }
});







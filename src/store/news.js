import Vue from 'vue'

export default {
    state: {
        news:[

        ]
       /* news:[
            {
                id:'fb1',
                title:'TITLE 1',
                description:'description of title1',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi architecto aspernatur beatae consectetur culpa distinctio doloribus eaque facere id, illo illum incidunt ipsum laboriosam magni maiores minima molestias natus nesciunt porro possimus quaerat quo quod reiciendis ullam ut voluptatem. At consequatur cupiditate, doloribus exercitationem libero numquam odio quae qui rerum voluptatibus? Aspernatur beatae dolores dolorum ea et hic labore laborum maiores minima nam nemo, nisi obcaecati, possimus reprehenderit ullam.\n Facere in ipsa numquam possimus, quia sit? Adipisci animi culpa deserunt error esse eum expedita harum in ipsam natus optio perspiciatis quasi, quibusdam quidem sed temporibus, vero voluptate. Adipisci aut blanditiis consequatur consequuntur corporis dolor dolorem dolores dolorum eaque error eveniet ex hic incidunt iste labore magnam minima minus mollitia, natus nemo nobis non numquam odio odit porro quaerat tenetur unde, velit veniam vitae. Ad commodi consequuntur corporis cum cupiditate delectus eum harum, maiores mollitia neque quas quidem quod repellendus repudiandae, sapiente totam veniam. Autem distinctio dolor esse illum inventore laboriosam quae quod quos sint tempora? Aperiam doloribus ea earum eius eos eum facere fugit illum incidunt inventore nobis obcaecati officiis perspiciatis quibusdam quo, rem saepe, sint, veniam! Fuga odio officia omnis quae qui quibusdam recusandae? Alias deleniti ipsum repellat.\n',
                category:'мероприятия',
                imageId:'fbim1',
                date:'2018'
            },
    {
                id:'fb2',
                title:'ITLE 2',
                description:'description of title2',
                text:'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                category:'изменения',
                imageId:'fbim2',
                date:'2018'
            },
            {
                id:'fb3',
                title:'Заголовок 3',
                description:'description of title3',
                text:'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                category:'мероприятия',
                imageId:'fbim3',
                date:'2018'
            }
        ]*/
    },
    mutations: {
        SET_NEWS(state, payload){
            state.news = payload;
        }
    },
    actions:{
      LOAD_NEWS({commit}){
          Vue.$db.collection('news').get()
              .then(querySnapshot => {
                  let news = [];
                  querySnapshot.forEach(s => {
                      const data = s.data();
                      let oneNews = {
                          id:s.id,
                          title:data.title,
                          description:data.description,
                          text:data.text,
                          category:data.category,
                          imageId:data.imageId,
                          date:data.date
                      };
                      news.push(oneNews);
                  });
                  commit('SET_NEWS', news);
              })
              .catch(err => console.log(err))
      }
    },
    getters: {
        getNews:(state) => state.news
    }
}
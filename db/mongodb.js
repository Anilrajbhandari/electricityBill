//show dbs
//show collections
data = {
    name :'Aashis'
}
db.collection.insert(data);
db.collectionname.insertOne(); //insert single object
db.collectionname.insertMany([{},{},{}]) //insert multiple object
//
db.post.insertOne(
    {
        title:'title',
        body: 'this is body',
        author:{
            name:'Aabhas'
        },
        keyword:[1,"one",'title']
    }
)
//
db.post.insertMany(
    [
        {
            title:'title 2',
            body:'body of 2',
            author:{
                name:'author 1',//this will be replaced by following name
                name:'author'
            },
            keyword:[2,'two']
        },
        {
            title:'title 3',
            body:'body of 3',
            author:{
                name:'author 1',
                name:'author'
            },
            keyword:[3,'three']
        }
    ]
)

//database blog
//collection post

db.post.find({title:'title 2'}).pretty() //select all where

db.post.find({'author.name':'author'}).pretty()

db.post.find().limit(2).pretty()

db.post.find({'author.name':'author'}).limit(1).pretty()

db.post.find().skip(1)

db.post.count()     //count the no of object inside the collection

db.post.find({title:{$in: ['title 1','title 2']}})

db.post.find({keyword:{$in: [1,2]}})
//listing objects using regex
db.post.find({body: /boDy/i})
//using ot to list the objects
db.post.find(
    {
        $or:[
            {title: 'title two'},
            {title : 'title'},
            {'author.name':'abhas'}
        ]
    }
)

db.post.find({
    title:'title',
    body: /body/i,
    $or:[{
        keyword: 1,
        keyword: 'one'
    }]
})//this comman will find object where 

db.post.find({
    keyword:{
        $gt: 1,
        $lt: 3
    }
})//this command will return object which keyword is greater than 1 and less than 3
//$gte, $lt, $lte

db.post.find().sort({'title': 1});//1 for assending and -1 for decending
//if there is no parameter the sort will be assedning
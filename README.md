<img src="ex1.png" width="500" />

- NODE Connection:
```javascript
const mongodb = require("mongodb").MongoClient;

mongodb.connect("mongodb://localhost:27017/mydb", (error, db) => {
    if (error) throw error;
    exports.database = db.db("BANCO");
});
```

- Setting POST Route:
```javascript
app.post("/criar", (req, res) => {
    mongodb.database.collection("autores").insertOne({"nome":req.body.autor}, (err, res) => {
        if (err) throw err;
    });
});
```

- Data submitting with fetch API
```javascript
fetch("http://localhost:3001/criar", {method:"POST", headers:{'Accept': 'application/json','Content-Type': 'application/json'},body:JSON.stringify({
    autor: document.querySelector("#input").value
})});
```
#
- GET Route
```javascript
app.get("/autores", (req, res) => {
    mongodb.database.collection("autores").find().toArray((error, results)=>{
        if (error) throw error;
        res.send(results);
    })
});
```

- Getting data with fetch API
```javascript
fetch("http://localhost:3001/autores").then(res => res.json())
.then(items => {
    items.map(item => {
        document.querySelector("#container").innerHTML += `<br/> ${item.nome}`;
    })
})

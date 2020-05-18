# case-g2l

#### Case technology - G2L.
---

#### In this case, a construction of API Rest was performed in NodeJS with MongoDB.

---

**Dependencies**
---
- NodeJS
- NPM or Yarn
- MongoDB
- Express
- Mongoose
- Nodemoon


**Install**
---
`https://github.com/annaflavia-castro/case-g2l.git`

`yarn install`

`yarn start`

---
* [POST] *Endpoint* for create drivers.
* [POST] *Endpoint* for create vehicles. 
* [POST] *Endpoint* for associated driver with vehicle. 

* [GET] *Endpoint* for list drivers. 
* [GET] *Endpoint* for list vehicles. 

* [PUT] *Endpoint* for update drivers. 
* [PUT] *Endpoint* for update vehicles.

* [DELETE] *Endpoint* for delete drivers. 
* [DELETE] *Endpoint* for delete vehicles. 

---

**URL**
---
```
{{url}}/drivers [GET]
{{url}}/drivers [POST]
{{url}}/drivers/:id [PUT]
{{url}}/drivers/:id [DELETE]
```
```
{{url}}/drivers/:idVehicle/connect_vehicles [POST]
```
```
{{url}}/vehicles [GET]
{{url}}/vehicles [POST]
{{url}}/vehicles/:id [PUT]
{{url}}/vehicles/:id [DELETE]
```
---

**Header**
---

- {{url}}/drivers/:idVehicle/connect_vehicles

- "driver": "id"

---

**Request**
---
#### /drivers [POST]
```
{
  "first_name": "João",
  "last_name": "Silva",
  "cpf": "57868005041",
  "birth_date": "01/01/2000",
  "status": true,
  "vehicles": []
}
```
`Create a new driver. This state, the status is true.`

#### /drivers/:id [UPDATE]
```
{   
  "first_name": "João",
  "last_name": "Souza",
  "cpf": "57868005041",
  "birth_date": "01/01/2000",
  "status": false,
  "vehicles": []
}
```
`Update a driver exist.`

#### /vehicles [POST]
```
{
  "name_owner": "João da Silva",
  "plate": "ABCD-1234",
  "renavam": "12345678910"
}
```
`Create a new vehicle.`

#### /vehicles/:id [UPDATE]
```
{   
	"name_owner": "João Silveira",
	"plate": "ABCD-1234",
	"renavam": "123456789"
}
```
`Update a vehicle exist.`

---
**Response**
---

`Create a new driver.`
```
{
  "status": true,
  "vehicles": [],
  "_id": "5ec2a696d579a8405c1b9b9e",
  "first_name": "Anna Flávia",
  "last_name": "Silva",
  "cpf": "57868005041",
  "birth_date": "01/01/2000",
  "createdAt": "2020-05-18T15:15:34.677Z",
  "updatedAt": "2020-05-18T15:34:43.896Z",
  "__v": 1
}
```

`Update of driver.`
```
{
  "status": false,
  "vehicles": [],
  "_id": "5ec2a696d579a8405c1b9b9e",
  "first_name": "Anna Flá",
  "last_name": "Castro",
  "cpf": "57868005041",
  "birth_date": "18/05/1980",
  "createdAt": "2020-05-18T15:15:34.677Z",
  "updatedAt": "2020-05-18T19:19:03.673Z",
  "__v": 1
}
```

`Create a new vehicle.`
```
{
  "_id": "5ec2a681d579a8405c1b9b9d",
  "name_owner": "João da Silva",
  "plate": "ABC-1234",
  "renavam": "123456789",
  "createdAt": "2020-05-18T15:15:13.907Z",
  "updatedAt": "2020-05-18T15:15:13.907Z",
  "__v": 0
}
```

`Update of vehicle.`
```
{
  "_id": "5ec25359f52721129c72098a",
  "name_owner": "Anna",
  "plate": "ABC-1234",
  "renavam": "123456789",
  "createdAt": "2020-05-18T09:20:25.777Z",
  "updatedAt": "2020-05-18T19:23:47.304Z",
  "__v": 0
}
```

`Associated driver with vehicle.`
```
{
  "status": true,
  "vehicles": [
    "5ec2a681d579a8405c1b9b9d"
  ],
  "_id": "5ec2a696d579a8405c1b9b9e",
  "first_name": "Anna Flá",
  "last_name": "Castro",
  "cpf": "1",
  "birth_date": "18/05/1980",
  "createdAt": "2020-05-18T15:15:34.677Z",
  "updatedAt": "2020-05-18T20:05:49.706Z",
  "__v": 2
}
```

---

**Insomnia**
---
#### A collection de testes realizados no Insomnia estão em um arquivo .json, dentro desse repositório.
---

**Evidences**
---
#### Case 1 - Driver created.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/create_drivers.png)

#### Case 2 - Vehicle created.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/create_vehicles.png)

#### Case 3 - Driver updated.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/update_driver.png)

#### Case 4 - Vehicle updated.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/update_vehicle.png)

#### Case 5 - Associated driver with vehicle.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/connect_vehicles.png)

#### Case 6 - Drivers list.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/list_drivers.png)

#### Case 7 - Vehicles list.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/list_vehicles.png)

#### Case 8 - Driver deleted.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/delete_drivers.png)

#### Case 9 - Vehicle deleted.
![image](https://github.com/annaflavia-castro/case-g2l/blob/master/images/delete_vehicles.png)

---

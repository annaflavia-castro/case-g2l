# case-g2l

#### Case technology - G2L 
---

#### In this case, a construction of API Rest was performed in NodeJS with MongoDB

---
* [POST] *Endpoint* para criar motoristas.
* [POST] *Endpoint* para criar veículos. 
* [POST] *Endpoint* para para relacionar motoristas com veículos. 

* [GET] *Endpoint* para listar motoristas. 
* [GET] *Endpoint* para listar veículos. 

* [PUT] *Endpoint* para atualizar motoristas. 
* [PUT] *Endpoint* para atualizar veículos.

* [DELETE] *Endpoint* para deletar motoristas. 
* [DELETE] *Endpoint* para deletar veículos. 

---

**Install**
---
`https://github.com/annaflavia-castro/case-g2l.git`

`yarn install`

`yarn start`


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
`Criando um novo registro de driver. Nesse estado, ele virá com o campo status como true.`

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
`Atualizando um motorista já existente.`

#### /vehicles [POST]
```
{
  "name_owner": "João da Silva",
  "plate": "ABCD-1234",
  "renavam": "12345678910"
}
```
`Criando um novo registro de vehicle.`

#### /vehicles/:id [UPDATE]
```
{   
	"name_owner": "João Silveira",
	"plate": "ABCD-1234",
	"renavam": "123456789"
}
```
`Atualizando um veículo já existente.`

---
**Response**
---

`Criação um novo motorista.`
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

`Atualização de um motorista.`
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

`Criação de um veículo.`
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

`Atualização de um veículo.`
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

`Associação de um motorista á um veículo.`
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

**Evidências**
---
#### Case 1 - Driver created.
![image]()

#### Case 2 - Vehicle created.
![image]()

#### Case 3 - Driver updated.
![image]()

#### Case 4 - Vehicle updated.
![image]()

#### Case 5 - Associated driver with vehicle.
![image]()

#### Case 6 - Drivers list.
![image]()

#### Case 7 - Vehicles list.
![image]()

#### Case 8 - Driver deleted.
![image]()

#### Case 9 - Vehicle deleted.
![image]()

---
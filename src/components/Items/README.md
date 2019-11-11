# Items

- [Items](#items)
  - [Item](#item)
    - [Properties](#item-properties)
  - [Room](#room)
    - [Properties](#room-properties)


## <a name="item"> Item

아이템 컴포넌트

``` html
    <Item
        name={name}
        category={category}
        deleteItem={deleteItem}/>
```

### <a name="item-properties"> Properties
|프로퍼티명|타입|기본값|설명|
|:---|:---|:---|:---|
|name|String|''|아이템의 이름|
|category|String \| Number|0|아이템의 카테고리 인덱스|
|deleteItem|Function|ERROR_MSG.UNDEFINED_FUNC|해당 아이템을 삭제한다|

## <a name="room"> Room

방 컴포넌트

``` html
<Room
    name={name}
    list={list}
    deleteRoom={() => deleteRoom(idx)}
    deleteItem={deleteItem}/>
```
### <a name="room-properties"> Properties
|프로퍼티명|타입|기본값|설명|
|:---|:---|:---|:---|
|name|String|''|방의 이름|
|list|Array|[]|방 정보를 담고 있는 배열|
|deleteRoom|Function|ERROR_MSG.UNDEFINED_FUNC|해당 방을 삭제한다|
|deleteItem|Function|ERROR_MSG.UNDEFINED_FUNC|해당 아이템을 삭제한다|

# Tools

- [Tools](#tools)
  - [ItemTools](#itemtools)
    - [Properties](#itemtools-properties)
  - [RoomTools](#roomtools)
    - [Properties](#roomtools-properties)

## ItemTools
아이템을 만드는 도구 컴포넌트

```html
    <ItemTools
        itemName={itemName}
        setItemName={setItemName}
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        roomList={roomList}
        createItem={createItem}/>
```
### <a name="itemtools-properties"> Properties
|프로퍼티명|타입|기본값|설명|
|:---|:---|:---|:---|
|itemName|String|''|인풋에 입력된 아이템의 이름값|
|setItemName|Function|ERROR_MSG.UNDEFINED_FUNC|아이템 이름을 변경한다.|
|itemCategory|String \| Number|0|선택된 아이템의 카테고리 인덱스|
|setItemCategory|Function|ERROR_MSG.UNDEFINED_FUNC|아이템 카테고리 값을 변경한다.|
|roomList|Array|[]|입력된 방들의 리스트|
|createItem|Function|ERROR_MSG.UNDEFINED_FUNC|새로운 아이템을 만든다.|


## RoomTools
방을 만드는 도구 컴포넌트

```html
    <RoomTools
        roomName={roomName}
        setRoomName={setRoomName}
        createRoom={createRoom}
    />
```
### <a name="roomtools-properties"> Properties </a>
|프로퍼티명|타입|기본값|설명|
|:---|:---|:---|:---|
|roomName|String|''|인풋에 입력된 방의 이름값|
|setRoomName|Function|ERROR_MSG.UNDEFINED_FUNC|방 이름을 변경한다.|
|createRoom|Function|ERROR_MSG.UNDEFINED_FUNC|새로운 방을 만들어 전체 리스트에 추가한다.|

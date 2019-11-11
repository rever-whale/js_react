# Component

- [Component](#component)
  - [Core](#core)
    - [Properties](#core-properties)

## <a name="core">Core

앱 내의 코어 컨트롤러

```html
<Core 
    roomName={roomName}
    setRoomName={setRoomName}
    createRoom={createRoom}
    itemName={itemName}
    setItemName={setItemName}
    itemCategory={itemCategory}
    setItemCategory={setItemCategory}
    roomList={roomList}
    createItem={createItem}
    deleteRoom={deleteRoom}
    deleteItem={deleteItem}/>
```

### <a name="core-properties">Properties
|프로퍼티명|타입|기본값|설명|
|:---|:---|:---|:---|
|roomName|String|''|인풋에 입력된 방의 이름값|
|itemName|String|''|인풋에 입력된 아이템의 이름값|
|itemCategory|String \| Number|0|선택된 아이템의 카테고리 인덱스|
|roomList|Array|[]|입력된 방들의 리스트|
|setRoomName|Function|ERROR_MSG.UNDEFINED_FUNC|방 이름을 변경한다.|
|createRoom|Function|ERROR_MSG.UNDEFINED_FUNC|새로운 방을 만들어 전체 리스트에 추가한다.|
|setItemName|Function|ERROR_MSG.UNDEFINED_FUNC|아이템 이름을 변경한다.|
|setItemCategory|Function|ERROR_MSG.UNDEFINED_FUNC|아이템 카테고리 값을 변경한다.|
|createItem|Function|ERROR_MSG.UNDEFINED_FUNC|새로운 아이템을 만든다.|
|deleteRoom|Function|ERROR_MSG.UNDEFINED_FUNC|선택한 방을 지운다.|
|deleteItem|Function|ERROR_MSG.UNDEFINED_FUNC|선택한 아이템을 지운다.|

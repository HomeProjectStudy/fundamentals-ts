"use strict";
function repository() {
    let data;
    function getData() {
        return data;
    }
    function setData(newData) {
        data = newData;
    }
    return {
        getData,
        setData,
    };
}
const repository1 = repository();
repository1.setData(12);
console.log(repository1.getData());

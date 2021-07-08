const question1 =(data) => {
    let items = [];
    let title = "Item in the meeting room";
    data.map((item, i) => {
        if(item.placement.name.toLowerCase() == 'meeting room'){
            item.push(item.name)
        }
    })
    return [items, title];
}
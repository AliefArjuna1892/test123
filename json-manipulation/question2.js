const question2 =(data) => {
    let items = [];
    let title = "find all electronic device";
    data.map((item, i) => {
        if(item.type.toLowerCase() == 'electronic'){
            item.push(item.name)
        }
    })
    return [items, title];
}
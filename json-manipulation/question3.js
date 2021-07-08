const question3 =(data) => {
    let items = [];
    let title = 'find all furniture';
    data.map((item, i) => {
        if(item.type.toLowerCase() == 'furniture'){
            item.push(item.name)
        }
    })
    return [items, title];
}
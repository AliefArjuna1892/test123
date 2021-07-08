const question5 =(data) => {
    let items = [];
    let title = "Find all items with brown color";
    data.map((item, i) => {
        var tags = item.tags;
        if(tags.includes('brown')){
            item.push(item.name)
        }
    })
    return [items, title];
}
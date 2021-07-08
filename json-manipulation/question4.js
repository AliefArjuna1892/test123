const question4 =(data) => {
    let items = [];
    let title = "Find all items were purchased on 16 Januari 2020";
    data.map((item, i) => {
        if(new Date(item.purchased_at * 1000).toString().substr(5, 10) == new Date('2020/01/16').toString().substr(5, 10)) {
            items.push(item.name)
        }
    })
    return [items, title];
}
document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id == 'home') {
        GetData.getHomeData()
    } else if (page.id == 'allproducts') {
        GetData.getAllproducts()
    } else if (page.id == 'cat') {
        var category = page.data.category
        GetData.getProductByCat(category);
    } else if (page.id == 'detail') {
        var data = page.data.data;
        GetData.getdetailProduct(data.name, data.cat);
    } else if (page.id == 'cart') {
        GetData.getCart()
    }
});

document.querySelector('ons-navigator').addEventListener('postpush', function (event) {
    if (event.enterPage.id == 'home' || event.enterPage.id == 'allproducts' || event.enterPage.id == 'cart') {
        var icon = '<ons-icon class="toolbaricon" size="30px" icon="fa-shopping-bag"></ons-icon>'
        $('#icon').html(icon)
    } else {
        var back = '<div class="left"><ons-back-button>Back</ons-back-button></div>'
        $('#icon').html(back)
        document.querySelector('ons-back-button').onClick = function (event) {
            document.querySelector('ons-navigator').popPage()
        };
    }
})

document.querySelector('ons-navigator').addEventListener('postpop', function (event) {
    if (event.enterPage.id == 'home' || event.enterPage.id == 'allproducts' || event.enterPage.id == 'cart') {
        var icon = '<ons-icon class="toolbaricon" size="30px" icon="fa-shopping-bag"></ons-icon>'
        $('#icon').html(icon)
    } else {
        var back = '<div class="left"><ons-back-button>Back</ons-back-button></div>'
        $('#icon').html(back)
        document.querySelector('ons-back-button').onClick = function (event) {
            document.querySelector('ons-navigator').popPage()
        };
    }
})


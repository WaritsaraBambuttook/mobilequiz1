$(document).ready(function () {
    GetData.getHomeData();
})

function gotoCategory(category) {
    var myNavigator = document.getElementById('myNavigator');
    myNavigator.pushPage('./views/category.html', {
        data: {
            category: category
        }
    })
}

function changeTab(page, highlight) {
    document.querySelector('ons-navigator').resetToPage(page);
    setTabHighlight(highlight);
}

function setTabHighlight(tabNo) {
    for (var tab = 1; tab <= 3; tab++) {
        var target = '#tab' + tab;
        if (tabNo == tab) {
            $(target).addClass('hightlight-bottom-toolbar');
        } else {
            $(target).removeClass('hightlight-bottom-toolbar');
        }
    }
}

function gotodetailProdcut(name, cat){
    var data = {
        name: name,
        cat: cat
    }
    var myNavigator = document.getElementById('myNavigator');
    myNavigator.pushPage('./views/detail.html', {
        data: {
            data: data
        }
    })
}
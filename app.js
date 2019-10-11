const $add = $(".add__btn");
const $remove = $(".remove__btn");
const $clear = $(".clear__btn");
const $list = $(".list");

$add.on("click", function() {
    const count = $list.find('li').length
    const $li = $(`<li>Task number ${count + 1}</li>`);
    $list.append($li);
});


$remove.on("click", function() {
    const $el = $("li").last();
    $el.remove();
});

$clear.on("click", function() {
    $list.empty();
});
